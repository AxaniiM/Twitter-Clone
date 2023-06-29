const express = require('express');
const app = express();
const authRouter = require('./auth');
const protectedRouter = require('./protected');

app.use(express.json());

app.use('/auth', authRouter);
app.use('/protected', protectedRouter);

app.listen(8000, () => {
  console.log('API started!');
});