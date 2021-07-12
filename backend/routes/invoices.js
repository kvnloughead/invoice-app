const db = require('../db/index');

const getInvoices = (req, res) => {
  db.query('SELECT * FROM invoices ORDER BY id ASC', (err, results) => {
    if (err) {
      throw err;
    }
    res.status(200).json(results.rows);
  });
};

module.exports = {
  getInvoices,
};
