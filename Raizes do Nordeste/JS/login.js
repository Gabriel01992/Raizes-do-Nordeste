const form =
  document.getElementById("loginForm");

form.addEventListener("submit", function(event){

  event.preventDefault();

  const email =
    document.getElementById("email").value;

  const password =
    document.getElementById("password").value;


const form = document.getElementById("loginForm");

form.addEventListener("submit", function(event){

  event.preventDefault();

  const mensagem =
    document.getElementById("mensagemLogin");

  const contador =
    document.getElementById("contador");

  mensagem.classList.add("mostrar");

  let segundos = 3;

  const intervalo = setInterval(() => {

    segundos--;
    contador.textContent = segundos;

    if(segundos === 0){
      clearInterval(intervalo);
      window.location.href = "index.html";
    }

  }, 1000);

});

});