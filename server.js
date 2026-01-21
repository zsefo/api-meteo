const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let data = {
  temperature: null,
  humidite: null
};

// GET pour récupérer les données
app.get("/api/data", (req, res) => {
  res.json(data);
});

// POST pour recevoir les données du Wokwi (ESP32)
app.post("/api/data", (req, res) => {
  const { temperature, humidite } = req.body;
  data = { temperature, humidite };
  res.status(200).json({ message: "Données reçues" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur météo actif sur http://localhost:${PORT}`);
});
