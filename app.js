const express = require('express')

const app = express()
// const mongoose = require('mongoose')
// const bodyParser = require('body-parser')

// app.use(bodyParser.json())

// import routes
const postsRoute = require('./routes/posts')

// routes
app.get('/', (req, res) => {
  res.send('api home')
})

// middleware
app.use('/add', postsRoute)

// connect to DB
// mongoose.connect(
//   process.env.DB_CONNECTION,
//   {
//     useNewUrlParser: true
//   },
//   () => console.log('connected to DB')
// )

module.exports = app
