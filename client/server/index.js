const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const {mongoose} = require('mongoose');

mongoose.connect(process.env.MONGO_URL)
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((err) => {
  console.log(err);
});

const app = express();
app.use('/', require('./routes/auth'));

const port = 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});