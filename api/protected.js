const express = require('express');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const { getAllPosts, createPost } = require('./database');

const router = express.Router();
const upload = multer();

router.get('/posts', authenticateToken, (req, res) => {
  try {
    getAllPosts((err, posts) => {
      if (err) {
        res.status(500).json({ message: err });
      } else {
        res.status(200).json({ posts });
      }
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post('/addPost', upload.none(), authenticateToken, (req, res) => {
  const { user_id, text } = req.body;

  try {
    createPost(user_id, text, (err) => {
      if (err) {
        res.status(500).json({ message: err });
      } else {
        res.status(201).json({ message: 'Post created successfully' });
      }
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (token == null) {
    return res.sendStatus(401);
  }

  jwt.verify(token, 't7f64h85478td6h49tf', (err, user) => {
    if (err) {
      return res.sendStatus(403);
    }

    req.user = user;
    next();
  });
}

module.exports = router;
