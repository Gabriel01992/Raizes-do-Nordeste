document.querySelectorAll(".category-card")
.forEach(card => {

    card.addEventListener("click", () => {

        const categoria =
        card.innerText.trim();

        localStorage.setItem(
            "categoriaSelecionada",
            categoria
        );

        window.location.href =
        "cardapio.html";

    });

});