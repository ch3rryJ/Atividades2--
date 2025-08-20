// atv1------------------------------------
let nome = prompt("Qual seu nome?")
console.log("Boas-vindas " + nome)

// atv2------------------------------------
const input = document.getElementById("valor")
const botao = document.getElementById("botao")
const texto = document.getElementById("texto")

botao.addEventListener("click", () => {
    texto.innerText = input.value
})
