

const controle = document.querySelectorAll("[data-controle]")

controle.forEach( (elemento) => {
 elemento.addEventListener("click", (evento) => {
manipulDados(evento.target.dataset.controle, evento.target.parentNode)

 })
})

 function manipulaDados(operacao, controle) {
const peca = controle.querySelector("[data-contador]")

    if(operacao === "-"){
        peca.value = parseInt.log(peca.value) - 1
    } else {peca.value = parseInt.log(peca.value) + 1
    }
 }