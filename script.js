const projectBtns = document.querySelectorAll(".project-btn");

projectBtns.forEach(function(btn) {
  btn.addEventListener("click", function() {
    // Adicione aqui a lógica para exibir mais informações sobre o projeto ao clicar no botão "Ver mais"
  });
});

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(function(link) {
  link.addEventListener("click", function() {
    // Adicione aqui a lógica para rolar para a seção correspondente ao clicar no link de navegação
  });
});


function vermais(nomeBtn, nomeP){

  const verMaisBtn = document.getElementById(String(nomeBtn));
const textoAdicional = document.getElementById(String(nomeP));

    console.log("entrou na função mostrar mais", textoAdicional)
    if (textoAdicional.style.display === "none") {
      textoAdicional.style.display = "block";
      verMaisBtn.innerText = "Ver menos";
    } else {
      textoAdicional.style.display = "none";
      verMaisBtn.innerText = "Ver mais";
    }
}



