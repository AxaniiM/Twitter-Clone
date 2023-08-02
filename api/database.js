const sqlite3 = require('sqlite3').verbose();
const bcrypt = require('bcrypt');

const db = new sqlite3.Database('database.db', (err) => {
  if (err) {
    console.error('Eroare la conectarea la baza de date:', err);
  } else {
    console.log('Conection succes!');
  }
});

const createUser = (username, password, callback) => {
  const hashedPassword = bcrypt.hashSync(password, 10);
  const query = 'INSERT INTO users (username, password) VALUES (?, ?)';
  db.run(query, [username, hashedPassword], callback);
};

const getUserByUsername = (username, callback) => {
  const query = 'SELECT * FROM users WHERE username = ?';
  db.get(query, [username], callback);
};

const getAllPosts = (callback) => {
  const query = 'SELECT * FROM posts';
  db.all(query, [], callback);
};

const createPost = (user_id, text, callback) => {
  const query = 'INSERT INTO posts (user_id, date, text) VALUES (?, ?, ?)';
  const currentDate = new Date().toISOString();

  db.run(query, [user_id, currentDate, text], callback);
};

module.exports = {
  createUser,
  getUserByUsername,
  getAllPosts,
  createPost
};
