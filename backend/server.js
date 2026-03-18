const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors({
  origin: "*"
}));

app.use(express.json());

const USER = "admin";
const PASS = "1234";
const TOKEN = "abc123";

app.get("/", (req, res) => {
  res.send("API Asistir24 funcionando 🚀");
});

app.post("/login", (req, res) => {
  const { user, pass } = req.body;

  if (user === USER && pass === PASS) {
    return res.json({ token: TOKEN });
  }

  res.status(401).json({ error: "Credenciales incorrectas" });
});

app.get("/data", (req, res) => {
  const auth = req.headers.authorization;

  if (auth !== TOKEN) {
    return res.status(403).json({ error: "No autorizado" });
  }

  res.json({
    mensaje: "Datos protegidos",
    servicios: ["Electricidad", "Plomería", "Cerrajería"]
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Servidor corriendo en puerto " + PORT);
});
