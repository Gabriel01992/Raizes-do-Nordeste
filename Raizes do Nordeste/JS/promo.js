/* Troca de páginas */

const paginas = document.querySelectorAll(".pagina");

const links = document.querySelectorAll(".nav-links a");

links.forEach(link => {


link.addEventListener("click", () => {

    paginas.forEach(pagina => {
        pagina.style.display = "none";
    });

    const destino =
    link.dataset.page;

    document
    .getElementById(destino)
    .style.display = "block";

});


});

/* Contador */

let tempo = 4 * 60 * 60;

function atualizarContador(){


let horas =
Math.floor(tempo / 3600);

let minutos =
Math.floor((tempo % 3600) / 60);

let segundos =
tempo % 60;

document
.getElementById("contador")
.textContent =
`${String(horas).padStart(2,"0")}:${String(minutos).padStart(2,"0")}:${String(segundos).padStart(2,"0")}`;

if(tempo > 0){
    tempo--;
}


}

setInterval(atualizarContador,1000);

atualizarContador();
