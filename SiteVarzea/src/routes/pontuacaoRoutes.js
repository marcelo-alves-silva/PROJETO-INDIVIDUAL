const express = require('express');
const router = express.Router();
const mysql = require('mysql2');

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
});

db.connect(err => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
  } else {
    console.log('Conectado ao banco de dados');
  }
});

router.get('/top-scorers', (req, res) => {
  const query = `
    SELECT u.nome, SUM(p.qtdacertos) as total_acertos
    FROM Pontuacao p
    JOIN Usuario u ON p.fkUsuario = u.idUsuario
    GROUP BY u.nome
    ORDER BY total_acertos DESC
    LIMIT 10;
  `;

  db.query(query, (err, results) => {
    if (err) {
      console.error('Erro ao consultar o banco de dados:', err);
      res.status(500).send('Erro ao consultar o banco de dados');
    } else {
      res.json(results);
    }
  });
});

module.exports = router;
