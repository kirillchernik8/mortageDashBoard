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

app.get('/*.js', (req, res, next) => {
  // req.url = req.url + '.br';
  console.log(req.url)
  // res.set('Content-Encoding', 'br');
  // res.set('Content-Type', 'text/javascript');
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