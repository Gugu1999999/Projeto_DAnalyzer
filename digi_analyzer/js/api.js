const API_BASE = "https://digi-api.com/api/v1";

async function buscarDigimons(page = 0, pageSize = 100) {
    const url = `${API_BASE}/digimon?page=${page}&pageSize=${pageSize}`;

    const resposta = await fetch(url);

    if (!resposta.ok) {
        throw new Error(`Erro HTTP: ${resposta.status}`);
    }

    return await resposta.json();
}

async function buscarTodosDigimons() {
    let todosDigimons = [];
    let pagina = 0;
    const quantidadePorPagina = 100;

    while (true) {
        const dados = await buscarDigimons(
            pagina,
            quantidadePorPagina
        );

        const digimons = dados.content || [];

        todosDigimons.push(...digimons);

        if (digimons.length < quantidadePorPagina) {
            break;
        }

        pagina++;
    }

    return todosDigimons;
}

async function buscarDigimonPorId(id) {
    const resposta = await fetch(`${API_BASE}/digimon/${id}`);

    if (!resposta.ok) {
        throw new Error(`Digimon não encontrado: ${id}`);
    }

    return await resposta.json();
}