const express = require('express');
const jwt = require('jsonwebtoken');

const router = express.Router();

router.get('/', authenticateToken, (req, res) => {
  res.json({ message: 'Hello from server!' });
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
