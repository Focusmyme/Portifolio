function enviar() {

let nome = window.document.getElementById('inome').value
let exib1 = window.document.getElementById('exib1')
let erro = window.document.getElementById('erro')


erro.style = 'color:red; font-size:10px'


if (nome == '') {exib1.innerText = '[ERRO] Escreva Seu Nome Na Parte Superior da Página'
exib1.style = 'display: block; max-width: 700px; font-size: 25px;'
erro.innerText = 'Você Não Me Disse Seu Nome'
erro.style = 'font-size: 15px; color:red;'
} else {exib1.style = 'display:block; width: 250px; font-size: 25px' 
exib1.innerHTML = `Olá, ${nome}! &#9996;&#65039;`
erro.innerText = 'Que Nome Bonito o Seu!'
erro.style = 'color:white; font-size: 15px'}
}