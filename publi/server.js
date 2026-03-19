const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Servir carpeta public
app.use(express.static(path.join(__dirname, "public")));

// Ruta principal
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Test API
app.get("/api/status", (req, res) => {
  res.json({ status: "ok" });
});

// 🔥 IMPORTANTE PARA RAILWAY
const PORT = process.env.PORT;

if (!PORT) {
  console.error("❌ PORT no definido");
  process.exit(1);
}

app.listen(PORT, '0.0.0.0', () => {
  console.log("Servidor corriendo en puerto " + PORT);
});
