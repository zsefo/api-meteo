const apiUrl = "https://api-meteo-mqvf.onrender.com/api/data";

function updateTime() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  document.getElementById("current-time").innerText = `${hours}:${minutes}`;
}

async function fetchData() {
  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      console.error("Erreur HTTP : ", response.status);
      return;
    }

    const data = await response.json();

    document.querySelector("#temperature .value").innerText = `${data.temperature} °C`;
    document.querySelector("#humidity .value").innerText = `${data.humidite} %`;

  } catch (error) {
    console.error("Erreur fetch : ", error);
  }
}

function init() {
  updateTime();
  fetchData();

  setInterval(updateTime, 1000);
  setInterval(fetchData, 5000);
}

init();
