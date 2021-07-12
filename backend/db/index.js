const { Pool } = require('pg');

const pool = new Pool({
  user: 'me',
  host: 'localhost',
  database: 'invoices',
  password: 'password',
  port: 5432,
});

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback)
  },
}

// export default pool;
