const express = require('express');
const jobListRouter = require('./routes/jobList');

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELTE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.use('/', jobListRouter);

app.listen(process.env.PORT || 5000, () => {
  console.log('server listening on 5000');
});