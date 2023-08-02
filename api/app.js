const express = require('express');
const app = express();
const authRouter = require('./auth');
const protectedRouter = require('./protected');
const cors = require('cors');

const allowedOrigins = ['http://localhost:3000'];

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  cors({
    origin: function (origin, callback) {
      // Check if the request origin is allowed, or if it's a same-origin request
      const isAllowed = !origin || allowedOrigins.indexOf(origin) !== -1;
      callback(null, isAllowed);
    },
  })
);

app.use('/auth', authRouter);
app.use('/protected', protectedRouter);

app.listen(8000, () => {
  console.log('API started!');
});