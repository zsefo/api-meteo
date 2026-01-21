const express = require("express");
const app = express();
app.use(express.json());

let data = {
  temperature: null,
  humidite: null
};

app.get("/api/data", (req, res) => {
  res.json(data);
});

app.post("/api/data", (req, res) => {
  const { temperature, humidite } = req.body;
  data.temperature = temperature;
  data.humidite = humidite;
  console.log("Données reçues :", data);
  res.json({ status: "ok", data });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur météo actif sur http://localhost:${PORT}`);
});
