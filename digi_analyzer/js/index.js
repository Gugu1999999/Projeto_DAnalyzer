
const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {
    menu.classList.toggle("aberto")
})

const cards = document.querySelectorAll(".Card");

searchInput.addEventListener("input", () => {
    const query = searchInput.value.trim().toLowerCase();

    cards.forEach(card => {
        const nameElement = card.querySelector(".card-header h1");
        
        if (nameElement) {
            const digimonName = nameElement.textContent.toLowerCase();

            if (digimonName.includes(query)) {
                card.classList.remove("hide"); // Se bater, exibe o card
            } else {
                card.classList.add("hide");    // Se não bater, esconde o card
            }
        }
    });
});
