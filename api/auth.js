const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const { createUser, getUserByUsername } = require("./database");

const router = express.Router();
const upload = multer();

const jwtSecretToken = "t7f64h85478td6h49tf";

router.post("/signup", upload.none(), async (req, res) => {
  try {
    const { username, password } = req.body;

    // Hash the user's password using bcrypt
    const hashedPassword = await bcrypt.hash(password, 10);

    // Use the updated createUser function with a Promise
    await createUser(username, hashedPassword);

    res.status(201).json({ message: "Registration successful!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error during registration." });
  }
});

router.post("/signin", upload.none(), async (req, res) => {
  try {
    const { username, password } = req.body;
    console.log(username, password)

    getUserByUsername(username, async (err, row) => {
      return console.log('sdsdsds')
      if (err) {
        console.error(err);
        res.status(500).json({ message: "Authentication error." });
      } else if (!row) {
        res.status(401).json({ message: "Incorrect username." });
      } else {
        const passwordMatch = await bcrypt.compare(password, row.password);
        console.log(passwordMatch)
        console.log("Hashed password from the database:", row.password);
        console.log("Password provided in the sign-in request:", password);
        if (!passwordMatch) {
          res.status(401).json({ message: "Incorrect username or password." });
        } else {
          const token = jwt.sign({ username: row.username }, jwtSecretToken, {
            expiresIn: "1h",
          });
          res.json({ token, user: { id: row.id, username: row.username } });
        }
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Authentication error." });
  }
});

module.exports = router;

