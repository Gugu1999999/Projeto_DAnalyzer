const bibliotecaDigimons = {
    1: {
        nome: Agumon
        tipo:Reptil
        atrinuto:vaccine
        campo = [
            Deep Savers,
            Dragon's Roar,
            Metal Empire,
            Nature Spirits,
            Nightmare Soldiers,
            Virus Busters,
        ]
        capacidade: 20 G[1]/ 15 G[2]
        evolucoes = ["Cu", "Toba"]
        imagem = "../../assets/images/degemonzes1.jpg"
    },

    2: {
        nome: Gabumon
        tipo:Reptil
        atributo: data, vaccine
        campo: [
            	Metal Empire
                Nature Spirits
                Virus Busters
                Wind Guardians
        ]
        capacidade: 15 G[3]/ 20 G[4]
        evolucoes = ["Cu", "Toba"]
        imagem = "../../assets/images/degemonzes1.jpg"
    },

    3: {
        nome: "Patamon"
        tipo: "mamifero"
        atributo: "Data, Free, Vaccine"
        campo: [
                   " Nature Spirits"
                    Virus Busters,"
                   "Wind Guardians"
                    Jungle Troopers"
        ]
        capacidade:15 G[3] / 20 G [4]
        evolucoes = ["Cu", "Toba"]
        imagem = "../../assets/images/degemonzes1.jpg"
    }

    4: {
        nome:
        tipo:
        atrinuto:
        campo:
        capacidade:
        evolucoes = ["Cu", "Toba"]
        imagem = "../../assets/images/degemonzes1.jpg"
    }
}

const campo_nome = document.getElementById("Nome")
const campo_tipo = document.getElementById("Tome")
const campo_atributo = document.getElementById("Atributo")
const campo_campo = document.getElementById("Campo")
const campo_capacidade = document.getElementById("Capacidade")

function digimonex(id) {
    const digimon = bibliotecaDigimons[id]
    if (digimon) {
        campo_nome.textContent = digimon.nome;
        camnpo_tipo.textContent = digimon.tipo;
        campo_atributo.textContent = digimon.atributo;
    } else {
        console.log("Digimon não encontrado.")
    }
}

digimonex(id);




