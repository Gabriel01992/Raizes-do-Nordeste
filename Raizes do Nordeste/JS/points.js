const botoes =
document.querySelectorAll(".btn-resgatar");

const mensagem =
document.getElementById("mensagemResgate");

botoes.forEach(botao => {

    botao.addEventListener("click", () => {

        mensagem.classList.add("mostrar");

        setTimeout(() => {

            mensagem.classList.remove("mostrar");

        }, 3000);

    });

});