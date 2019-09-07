const express = require('express')

const router = express.Router()
const Post = require('../models/Post')

router.use(express.json())

// Routes
// get all post request
router.get('/', (req, res) => {
  Post.find()
    .then(results => {
      res.status(200).json(results)
    })
    .catch(error => {
      res.status(500).json(error)
    })
})

// get post by ID
router.get('/:id', (req, res) => {
  Post.findById(req.params.id)
    .then(results => {
      res.status(200).json(results)
    })
    .catch(error => {
      res.status(500).json(error)
    })
})

/// /delete post
router.delete('/:id', (req, res) => {
  Post.remove({ _id: req.params.id })
    .then(results => {
      res.status(200).json(results)
    })
    .catch(error => {
      res.status(500).json(error)
    })
})

// update
router.patch('/:id', (req, res) => {
  Post.updateOne({ _id: req.params.id }, { $set: { title: req.body.title } })
    .then(results => {
      res.status(200).json(results)
    })
    .catch(error => {
      res.status(500).json(error)
    })
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
