const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");
const searchInput = document.getElementById("search-input");

menuBtn.addEventListener("click", () => {
    menu.classList.toggle("aberto");
});

const cards = document.querySelectorAll(".Card");

searchInput.addEventListener("input", () => {
    const query = searchInput.value.trim().toLowerCase();

    cards.forEach(card => {
        const nameElement = card.querySelector(".card-header h1");

        if (nameElement) {
            const digimonName = nameElement.textContent.trim().toLowerCase();

            if (digimonName.includes(query)) {
                card.classList.remove("hide");
            } else {
                card.classList.add("hide");
            }
        }
    });
});

cards.forEach(card => {
    card.addEventListener("click", () => {
        const pagina = card.dataset.page;
        window.location.href = pagina;
    });

    card.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            const pagina = card.dataset.page;
            window.location.href = pagina;
        }
    });
});