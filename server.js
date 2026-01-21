const express = require("express");
const app = express();
app.use(express.json());

let data = {
  temperature: null,
  humidite: null
};

// Route GET pour lire les données
app.get("/api/data", (req, res) => {
  res.json(data);
});

// Route POST pour recevoir les données
app.post("/api/data", (req, res) => {
  const { temperature, humidite } = req.body;
  data.temperature = temperature;
  data.humidite = humidite;
  console.log("Données reçues :", data);
  res.json({ status: "ok", data });
});

// Route status (propre + utile pour tests)
app.get("/api/status", (req, res) => {
  res.json({
    status: "ok",
    message: "Serveur actif",
    timestamp: Date.now()
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur météo actif sur http://localhost:${PORT}`);
});
