const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const { createUser, getUserByUsername } = require('./database');

const router = express.Router();
const upload = multer();

router.post('/signup', upload.none(), async (req, res) => {
  try {
    const { username, password } = req.body;

    createUser(username, password, (err) => {``

      if (err) {
        console.error(err);
        res.status(500).json({ message: 'Registration error.' });
      } else {
        res.status(201).json({ message: 'Registration successful!' });
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error during registration.' });
  }
});

router.post('/signin', async (req, res) => {
  try {
    const { username, password } = req.body;

    getUserByUsername(username, async (err, row) => {
      if (err) {
        console.error(err);
        res.status(500).json({ message: 'Authentication error.' });
      } else if (!row) {
        res.status(401).json({ message: 'Incorrect username or password.' });
      } else {
        const passwordMatch = await bcrypt.compare(password, row.password);
        if (!passwordMatch) {
          res.status(401).json({ message: 'Incorrect username or password.' });
        } else {
          const token = jwt.sign({ username: row.username }, 't7f64h85478td6h49tf', { expiresIn: '1h' });
          res.json({ token, user: { id: row.id, username: row.username } });
        }
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Authentication error.' });
  }
});

module.exports = router;
