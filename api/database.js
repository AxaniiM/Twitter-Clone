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

module.exports = {
  createUser,
  getUserByUsername,
};
