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

const typedTextSpan = document.querySelector('.typed-text');
const cursorSpan = document.querySelector('.cursor');

const textArray = ["uma retrospectiva...", "uma jornada de aprendizado...", "minha história..."];
const typingDelay = 200; // velocidade da digitação em milissegundos
const erasingDelay = 100; // velocidade da exclusão em milissegundos
const newTextDelay = 2000; // pausa entre a digitação e exclusão
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    textArrayIndex++;
    if (textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() {
  if (textArray.length) setTimeout(type, newTextDelay + 250);
});




