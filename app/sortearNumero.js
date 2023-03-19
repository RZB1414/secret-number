const menorValor = 0;
const maiorValor = 100;

const numeroScreto = gerarNumeroAleatorio();

function gerarNumeroAleatorio() {
  return Math.floor(Math.random() * maiorValor + 1);
}

console.log("O número secreto é " + numeroScreto);

const elementoMenorValor = document.getElementById('menor-valor');
elementoMenorValor.innerHTML = menorValor;

const elementoMaiorValor = document.getElementById('maior-valor');
elementoMaiorValor.innerHTML = maiorValor;