const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

let solicitudes = [];

app.post('/api/contratar', (req, res) => {
  solicitudes.push(req.body);
  console.log("Nueva solicitud:", req.body);
  res.json({ ok: true });
});

app.get('/api/admin', (req, res) => {
  res.json(solicitudes);
});
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log("Servidor en puerto", PORT));
