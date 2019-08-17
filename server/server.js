const express = require('express');
const path = require('path');
const cors = require('cors')
const {
  getUserInfo
} = require('../database/index.js')
const {
  getStats
} = require('../database/index.js')
const compression = require('compression')


const app = express();
const parser = require('body-parser')

app.use(cors())
app.use(parser.json())
app.use(express.static(path.join(__dirname, '../public')))
app.use(compression())

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/api/allUsers', (req, res) => {
  getUserInfo((result) => {
    res.send(result)
  })
})

app.get('/api/stats', (req, res) => {
  getStats((result) => {
    res.send(result)
  })
})

const PORT = process.env.PORT || 3002

app.listen(PORT, () => {
  console.log(`server running at: http://localhost:${PORT}`)
});