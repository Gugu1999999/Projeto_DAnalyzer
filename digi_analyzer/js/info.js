const bibliotecaDigimons = {
    agumon: {
        nome: "Agumon",
        nivel: "Rookie",
        tipo: "Reptile",
        atributo: "Vaccine",
        campo: "Dragon's Roar",
        capacidade: "Pepper Breath",
        imagem: "../../assets/images/degemonzes1.jpg",
        evolucoes: ["Greymon", "MetalGreymon", "WarGreymon"]
    },

    gabumon: {
        nome: "Gabumon",
        nivel: "Rookie",
        tipo: "Reptile",
        atributo: "Data",
        campo: "Nature Spirits",
        capacidade: "Blue Blaster",
        imagem: "../../assets/images/degemonzes2.jpg",
        evolucoes: ["Garurumon", "WereGarurumon", "MetalGarurumon"]
    },

    patamon: {
        nome: "Patamon",
        nivel: "Rookie",
        tipo: "Mammal",
        atributo: "Data",
        campo: "Wind Guardians",
        capacidade: "Boom Bubble",
        imagem: "../../assets/images/degemonzes3.jpg",
        evolucoes: ["Angemon", "MagnaAngemon", "Seraphimon"]
    },

    biyomon: {
        nome: "Biyomon",
        nivel: "Rookie",
        tipo: "Bird",
        atributo: "Vaccine",
        campo: "Wind Guardians",
        capacidade: "Spiral Twister",
        imagem: "../../assets/images/degemonzes4.jpg",
        evolucoes: ["Birdramon", "Garudamon", "Hououmon"]
    }
};

const parametros = new URLSearchParams(window.location.search);

const id = parametros.get("digimon");

console.log(id);

const dados = bibliotecaDigimons[id];

const listaEvolucoes = document.getElementById("digimon-evolucoes");

dados.evolucoes.forEach(evolucao => {
    const item = document.createElement("li");
    const link = document.createElement("a");

    link.href = "#";
    link.classList.add("digimon");
    link.textContent = evolucao;

    item.appendChild(link);
    listaEvolucoes.appendChild(item);
});

console.log(dados);

const nome = document.getElementById("digimon-name");

nome.textContent = dados.nome;

const imagem = document.getElementById("digimon-image");

imagem.src = dados.imagem;
imagem.alt = dados.nome;

const nivel = document.getElementById("Nivel");
const tipo = document.getElementById("Tipo");
const atributo = document.getElementById("Atributo");
const campo = document.getElementById("Campo");
const capacidade = document.getElementById("Capacidade");

nivel.textContent = `Nível: ${dados.nivel}`;
tipo.textContent = `Tipo: ${dados.tipo}`;
atributo.textContent = `Atributo: ${dados.atributo}`;
campo.textContent = `Campo: ${dados.campo}`;
capacidade.textContent = `Capacidade: ${dados.capacidade}`;