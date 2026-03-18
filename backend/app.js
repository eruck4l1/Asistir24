const express = require('express');
const app = express();

app.use(express.json());

let solicitudes = [];

// recibir emergencia
app.post('/emergencia', (req, res) => {
  const nueva = {
    id: Date.now(),
    problema: req.body.problema
  };

  solicitudes.push(nueva);

  res.json({ ok: true, mensaje: 'Solicitud enviada' });
});

// ver solicitudes (mecánicos)
app.get('/solicitudes', (req, res) => {
  res.json(solicitudes);
});

app.listen(3000, () => console.log('Servidor en puerto 3000'));
