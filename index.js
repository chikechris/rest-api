require('dotenv/config')
const app = require('./app')
const mongoose = require('mongoose')

mongoose.connect(
  process.env.DB_CONNECTION,
  {
    useNewUrlParser: true
  },
  () => console.log('connected to DB')
)

app.listen(8000, () => {
  console.log(`Listening on port 8000`)
})
