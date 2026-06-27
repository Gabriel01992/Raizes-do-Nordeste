const form = document.getElementById("cadastroForm");
const consent = document.getElementById("consent");
const erroLgpd = document.getElementById("erroLgpd");

form.addEventListener("submit", function(e){

    e.preventDefault();

    if(!consent.checked){
        erroLgpd.textContent =
        "Você precisa aceitar os termos e a política de privacidade para continuar.";

        erroLgpd.style.display = "block";
        return;
    }

    erroLgpd.style.display = "none";

    const sucesso = document.getElementById("sucesso");

  sucesso.style.display = "block";

  setTimeout(() => {
    window.location.href = "login.html";
  }, 1000);
});