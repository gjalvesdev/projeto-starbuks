let circulo = document.querySelector(".circulo")
let imagem = document.querySelector(".copo")

function trocarCor(cor) {
    circulo.style.background = cor
}

function trocarImagem(endereco) {
  // 1) esmaece em 0.5s
  imagem.style.opacity = 0;

  // 2) aguarda 500ms para o fade-out terminar
  setTimeout(() => {
    // 3) troca o src
    imagem.src = endereco;
    // 4) fade-in de volta
    imagem.style.opacity = 1;
  }, 500);
}