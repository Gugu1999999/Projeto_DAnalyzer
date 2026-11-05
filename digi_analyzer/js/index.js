
const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");
const searchInput = document.getElementById("search-input");

const listaDigimons = document.getElementById("lista-digimons");

let todosDigimons = [];

// Menu
menuBtn.addEventListener("click", () => {
    menu.classList.toggle("aberto");
});

// Cria os cartões
function criarCard(digimon) {

    const card = document.createElement("article");
    card.classList.add("Card");

    card.dataset.digimon = digimon.id;

    const imagem = document.createElement("img");
    imagem.classList.add("card-image");
    imagem.src = digimon.image;
    imagem.alt = digimon.name;
    imagem.loading = "lazy";

    const informacoes = document.createElement("div");
    informacoes.classList.add("card-info");

    const numero = document.createElement("span");
    numero.classList.add("card-number");
    numero.textContent = `#${digimon.id}`;

    const nome = document.createElement("h1");
    nome.textContent = digimon.name;

    informacoes.appendChild(numero);
    informacoes.appendChild(nome);

    card.appendChild(imagem);
    card.appendChild(informacoes);

    // Abre a página de informações
    card.addEventListener("click", () => {
        window.location.href = `info.html?digimon=${digimon.id}`;
    });

    listaDigimons.appendChild(card);
}

// Exibe os Digimons na tela
function exibirDigimons(digimons) {

    listaDigimons.innerHTML = "";

    digimons.forEach(digimon => {
        criarCard(digimon);
    });
}

// Carrega os dados da API
async function iniciarCatalogo() {

    try {
        todosDigimons = await buscarTodosDigimons();

        exibirDigimons(todosDigimons);

    } catch (erro) {
        console.error("Erro ao carregar Digimons:", erro);

        listaDigimons.textContent =
            "Não foi possível carregar os Digimons.";
    }
}

// Pesquisa
searchInput.addEventListener("input", () => {

    const pesquisa = searchInput.value.trim().toLowerCase();

    const resultado = todosDigimons.filter(digimon => {

        const nome = digimon.name.toLowerCase();
        const id = String(digimon.id);

        return nome.includes(pesquisa) || id.includes(pesquisa);
    });

    exibirDigimons(resultado);
    
    searchInput.closest("form").addEventListener("submit", (event) => {
    event.preventDefault();
});
});

// Inicializa
iniciarCatalogo();
