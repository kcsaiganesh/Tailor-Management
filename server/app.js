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
app.use('/orders', require('./router/orders'));


// Start the server
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
