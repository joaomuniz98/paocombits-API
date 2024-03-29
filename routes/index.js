const express = require('express')
const { createPost , getAllPosts , getPost , removePost } = require('../controllers/postController')
const { createUser , loginUser } = require('../controllers/userController')
const router =  express.Router()


router.post('/post-creat',createPost)
router.get('/get-all-posts',getAllPosts)
router.get('/get-post/:id' , getPost)
router.delete('/remove-post/:id' , removePost)
router.post('/create-user',createUser)
router.post('/login', loginUser)


module.exports = router






