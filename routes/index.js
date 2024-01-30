const express = require('express')
const { createPost , getAllPosts , getPost } = require('../controllers/postController')
const router =  express.Router()


router.post('/post-creat',createPost)
router.get('/getAllPosts',getAllPosts)
router.get('/getPost/:id' , getPost)



module.exports = router






