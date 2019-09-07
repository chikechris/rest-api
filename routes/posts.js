const express = require('express')

const router = express.Router()
const Post = require('../models/Post')

router.use(express.json())

// Routes
router.get('/', (req, res) => {
  res.send('come in')
})

router.get('/pos', (req, res) => {
  res.send('inside')
})

router.post('/', (req, res) => {
  console.log(req.body)
  const post = new Post({
    title: req.body.title,
    description: req.body.description
  })
  post
    .save()

    .then(data => {
      res.json(data)
    })
    .catch(err => {
      res.json({ message: err })
    })
})

module.exports = router
