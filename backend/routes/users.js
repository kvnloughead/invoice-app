const db = require('../db/index');

const getUsers = (req, res) => {
  db.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
};

module.exports = {
  getUsers,
};
