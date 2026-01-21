const express = require("express");
const app = express();

app.use(express.json());

let data = { temperature: null, humidite: null };

app.post("/api/send", (req, res) => {
  data = req.body;
  console.log("Données reçues :", data);
  res.send("OK");
});

app.get("/api/data", (req, res) => {
  res.json(data);
});

app.listen(3000, () => {
  console.log("Serveur météo actif sur http://localhost:3000");
});
