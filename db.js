const mysql = require('mysql2/promise');
 // Importez la version compatible avec les promesses de mysql2

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'comment'
});

module.exports = {
  query: pool.query.bind(pool),
  getConnection: pool.getConnection.bind(pool)
};
