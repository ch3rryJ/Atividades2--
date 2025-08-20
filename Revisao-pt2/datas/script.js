//atv1---------------------------------------
 const data = document.getElementById("data")
 const dataAtual = document.getElementById("dataAtual")

 data.addEventListener("click", () => {
    const agora = new Date()
    const dataFormatada = agora.getDate() + "/" + (agora.getMonth() + 1) + "/" + agora.getFullYear()
    dataAtual.innerText = "Hoje é: " + dataFormatada
 })
//atv2------------------------------------
const hoje = new Date()
const dataAniversario = new Date("2025-10-08")
const diferenca = dataAniversario - hoje
const diasFaltando = Math.ceil(diferenca / (1000 * 60 * 60 * 24))
console.log("Faltam " + diasFaltando + " dias para o seu aniversário")
