const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');
const app = express();

dotenv.config({ path: './config.env' });



// Connect to the database
require('./db/conn');

app.use(
  cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  })
);

app.use(express.json())

// Mount the auth router
app.use('/', require('./router/auth'));

// Define some routes
app.get('/about', (req, res) => {
  console.log('Hello my About');
  res.send('Hello About world from the server');
});

app.get('/contact', (req, res) => {
  res.send('Hello Contact world from the server');
});

app.get('/signin', (req, res) => {
  res.send('Hello Login world from the server');
});

app.get('/signup', (req, res) => {
  res.send('Hello Registration world from the server');
});

// Start the server
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
