const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const {mongoose} = require('mongoose');
const cookieParser = require('cookie-parser');
const app = express();


// Connect to MongoDB Database Connection
mongoose.connect(process.env.MONGO_URL)
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((err) => {
  console.log(err);
});

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));


app.use('/', require('./routes/auth'));

const port = 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});