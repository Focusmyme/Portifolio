
function clicar() {

let valor = document.getElementById('inome').value;
let nomes = window.document.getElementById('nomes');


nomes.innerHTML = `Olá <strong>${valor}</strong>, Seja bem Vindo!`;

if (valor == '') {nomes.innerHTML = `[ERRO] Você Não Digitou Seu Nome.`}

}