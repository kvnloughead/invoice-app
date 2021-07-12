const express = require('express');
const userQueries = require('./routes/users');
const invoiceQueries = require('./routes/invoices');

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/users', userQueries.getUsers);
app.get('/invoices', invoiceQueries.getUsers);

app.get('/', (req, res) => {
  res.json({ info: 'Node.js, Express, and Postgres API' });
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}.`);
});
