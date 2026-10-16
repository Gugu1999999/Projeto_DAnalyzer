const digimonUrl = "https://digi-api.com/api/v1/digimon/1485";

const fetchDigimon = () => {
  fetch(digimonUrl)
    .then(response => response.json())
    .then(data => {
      const digimonName = data.name;
      document.getElementById("digimon-name").textContent = digimonName;
    });

    return response.status(200).json({ message: "Digimon encontrado" });
};

fetchDigimon();