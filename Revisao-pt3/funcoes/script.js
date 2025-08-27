console.log("atv1-------------------------")
// Função declarativa
function saudacao(){
    console.log("Olá :D")
}

saudacao()
console.log("atv2-------------------------")
//Função com parâmetro
let nome = prompt("Digite seu nome:")
function saudacao2(nome){
    return "Olá " + nome
}
console.log(saudacao2(nome))

console.log("atv3-------------------------")
//Função anonima
let mostrarMensagem = function() {
    console.log("Eu gosto de pizza")
}
mostrarMensagem()

console.log("atv4-------------------------")
//Arrow function
let a = Number(prompt("Digite um número:"))
let b = Number(prompt("Digite outro número:"))
const multiplica = (a, b) => {
    return a * b
}
console.log(multiplica(a , b))