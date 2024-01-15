const express = require('express')
const { createPost , getPosts } = require('../controllers/postController')
const router =  express.Router()


router.post('/post-creat',createPost)
router.post('/getPosts',getPosts)



module.exports = router






