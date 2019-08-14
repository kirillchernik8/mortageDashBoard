const mongoose = require('mongoose');
const fs = require('fs');
const data = JSON.parse(fs.readFileSync(__dirname + '/accounts.json', 'utf-8'));
const upsertMany = require('@meanie/mongoose-upsert-many');


// Connect to mongoose 
mongoose.connect('mongodb://user:abc123@ds149437.mlab.com:49437/users', {
  useNewUrlParser: true
});

//Set up the databse
let db = mongoose.connection;

// Create the schema
let userSchema = new mongoose.Schema({
  id: String,
  balance: Number,
  credit: Number,
  picture: String,
  name_first: String,
  name_last: String,
  employer: String,
  email: String,
  phone: Number,
  address: String,
  created: Date,
  tags: [String]
});


// Use plugin to easily upsert the data
userSchema.plugin(upsertMany);

// Create a mongoose model
let User = mongoose.model('User', userSchema);

// Match field is the one we will be looking for when upserting the data
const matchField = ['id'];


// Set up a  helper upsert function to run on open connection later
async function insertAccInfo() {
  try {
    // upserting here is just one way to solve the problem but is the most elegant way
    await User.upsertMany(data, matchField);
    console.log('inserted the data!');
  } catch (err) {
    console.error(err, 'error on inserting the data');
    process.exit();
  };
};

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('mongoose connection opened');
  insertAccInfo()
});


// create a helper function to find all users. Export to the server.
let getUserInfo = (callback) => {
  User.find({}, 'balance credit picture name_first name_last employer email phone address', (err, data) => {
    if (err) {
      callback(err)
    } else {
      callback(data)
    }
  })
}


let getStats = async (callback) => {
  let result = {
    credit: {
      min: 0,
      med: 0,
      good: 0
    },
    balance: {
      low: 0,
      med: 0,
      high: 0
    },
    medianValue:0
  }

  // getting the credit score statistics

  result.credit.min = await User.countDocuments({
    credit: {
      $lt: 600
    }
  }, (err, data) => {
    return data
  })

  result.credit.med = await User.count({
    credit: {
      $gt: 600,
      $lt: 700
    }
  }, (err, data) => {
    return  data
  })
  result.credit.good = await User.count({
    credit: {
      $gt: 700
    }
  }, (err, data) => {
    return data
  })


  // getting the statistics on the balance 
  result.balance.low = await User.countDocuments({
    balance: {
      $lt: 2000
    }
  }, (err, data) => {
    return data
  })

  result.balance.med = await User.count({
    balance: {
      $gt: 2000,
      $lt: 7000
    }
  }, (err, data) => {
    return  data
  })
  result.balance.high = await User.count({
    balance: {
      $gt: 7000
    }
  }, (err, data) => {
    return data
  })

  callback(result);
}

module.exports.getUserInfo = getUserInfo
module.exports.getStats = getStats