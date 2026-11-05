
const parametros = new URLSearchParams(window.location.search);

const id = parametros.get("digimon");

// Retorna o primeiro valor encontrado em uma lista
function obterValores(lista, propriedade) {

    if (!Array.isArray(lista)) {
        return "Não informado";
    }

    const valores = lista
        .map(item => item[propriedade])
        .filter(Boolean);

    return valores.length > 0
        ? valores.join(", ")
        : "Não informado";
}

// Exibe as evoluções
function exibirEvolucoes(lista) {

    const elemento = document.getElementById("digimon-evolucoes");

    elemento.innerHTML = "";

    if (!Array.isArray(lista) || lista.length === 0) {
        elemento.textContent = "Nenhuma evolução cadastrada.";
        return;
    }

    lista.forEach(evolucao => {

        const item = document.createElement("li");
        const link = document.createElement("a");

        link.textContent = evolucao.digimon || evolucao.name;

        if (evolucao.id) {
            link.href = `info.html?digimon=${evolucao.id}`;
        } else {
            link.href = "#";
        }

        item.appendChild(link);
        elemento.appendChild(item);
    });
}

// Carrega as informações do Digimon
async function carregarInformacoes() {

    if (!id) {
        document.getElementById("digimon-name").textContent =
            "Nenhum Digimon selecionado.";
        return;
    }

    try {

        const dados = await buscarDigimonPorId(id);

        // Nome
        document.getElementById("digimon-name").textContent =
            dados.name;

        // Imagem
        const imagem = document.getElementById("digimon-image");

        imagem.src = dados.images?.[0]?.href || dados.image || "";
        imagem.alt = dados.name;

        // Características
        document.getElementById("Nivel").textContent =
            `Nível: ${obterValores(dados.levels, "level")}`;

        document.getElementById("Tipo").textContent =
            `Tipo: ${obterValores(dados.types, "type")}`;

        document.getElementById("Atributo").textContent =
            `Atributo: ${obterValores(dados.attributes, "attribute")}`;

        document.getElementById("Campo").textContent =
            `Campo: ${obterValores(dados.fields, "field")}`;

        document.getElementById("Capacidade").textContent =
            `Habilidades: ${obterValores(dados.skills, "skill")}`;

        // Evoluções
        exibirEvolucoes(dados.nextEvolutions);

    } catch (erro) {

        console.error("Erro ao carregar informações:", erro);

        document.getElementById("digimon-name").textContent =
            "Não foi possível encontrar esse Digimon.";
    }
}

carregarInformacoes();
