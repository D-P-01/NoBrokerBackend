// routes/postRoutes.js
const express = require('express');
const { createPost, getPosts, getPost, updatePost, deletePost, getPostsByUserId } = require('../controller/postController');
const router = express.Router();

router.post('/', createPost);
router.get('/', getPosts);
router.get('/:id', getPost);
router.put('/:id', updatePost);
router.delete('/:id', deletePost);
router.get('/user/:userId', getPostsByUserId);

module.exports = router;
