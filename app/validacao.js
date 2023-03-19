function verificaSeOchutePossuiUmValorValido(chute){

    if (chute === "Game Over.") {

        document.body.innerHTML =
            `
            <h2>Desistiu, você disse ${chute}!!!</h2>
            <h3>Pressione o botão para jogar novamente</h3>
            <button id="jogar-novamente" class="btn-jogar" >Jogar novamente</button>
            `
            document.body.style.backgroundColor = "black";
    }

    const numero = +chute

    if (chuteForInvalido(numero)) {
        elementoChute.innerHTML += '<div>Valor Inválido</div>';
    }


    if (numero > maiorValor || numero < menorValor) {
        elementoChute.innerHTML += `<div>Valor inválido: fale um 
            número entre ${menorValor} e ${maiorValor}</div>`
            return
    }

    if (numero === numeroScreto) {
        document.body.innerHTML = `
        <h2>Você acertou!</h2>
        <h3>O número secreto era ${numeroScreto}</h3>
        <button id ="jogar-novamente" class="btn- jogar">
        Jogar novamente</button>
        `
    }else if (numero > numeroScreto) {
        elementoChute.innerHTML += `
        <div>O número secreto é menor <i class="fa-solid fa-arrow-down-long"></i></div>
        `
    } else {
        elementoChute.innerHTML +=`
        <div>O número secreto é maior <i class="fa-solid fa-arrow-up-long"></i></div>
        `
    }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero);
}

document.body.addEventListener('click', e =>{
    if (e.target.id == 'jogar-novamente') {
        window.location.reload()
    }
})
