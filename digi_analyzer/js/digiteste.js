const digimonUrl = "https://digi-api.com/api/v1/digimon/1485"; // 1485 retorna pyradimon, com uma internet ruim, aparece "carregando" por um breve momento, enquanto para o erro, qualquer id muito alto que não seja de um digimon, aparecerá "carregando" inicialmente, e logo depois uma mensagem de erro no h1.

const fetchDigimon = async () => {
    const digimonName = document.getElementById("digimon-name");
    digimonName.textContent = "Carregando...";

    const inicio = performance.now();

    try {
        const response = await fetch(digimonUrl);

        if (!response.ok) {
            throw new Error(`Erro HTTP: ${response.status}`);
        }

        const data = await response.json();
        digimonName.textContent = data.name;
    } catch (error) {
        digimonName.textContent = "Erro ao consultar o Digimon.";
        console.error("Erro na consulta:", error);
    } finally {
        const fim = performance.now();
        const duracao = (fim - inicio).toFixed(0);
        console.log(`Tempo da consulta: ${duracao} ms`);
    }
};

fetchDigimon();