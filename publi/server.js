const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Asistir24 funcionando 🚀');
});

app.get('/api/status', (req, res) => {
  res.json({ status: 'ok' });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, '0.0.0.0', () => {
  console.log('Servidor activo en puerto ' + PORT);
});
