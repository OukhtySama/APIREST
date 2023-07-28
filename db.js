const mysql = require('mysql2/promise');

// Crée une piscine de connexions MySQL avec les informations de configuration spécifiées
const pool = mysql.createPool({
  host: 'localhost',   
  user: 'root',        
  password: '',        
  database: 'comment'  
});

// Exporte les méthodes "query" et "getConnection" 
module.exports = {
  query: pool.query.bind(pool),
  getConnection: pool.getConnection.bind(pool)
};
