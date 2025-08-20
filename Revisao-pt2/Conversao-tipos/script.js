// atv1--------------------------------------
const num1 = document.getElementById("num1")
const num2 = document.getElementById("num2")
const soma = document.getElementById("soma")
const result = document.getElementById("result")

soma.addEventListener("click", () => {
    const soma = Number(num1.value) + Number(num2.value)
    result.innerText = "Soma: " + soma
})

// atv2------------------------------------
let nome = prompt("Qual seu nome?")
let valor = Number(prompt("Digite um valor:"))
console.log("Meu nome é ", nome, ", eu digitei o valor:", valor)

// atv3------------------------------------
let idade1 = Number(prompt("Qual sua idade?"))
if (idade1 >= 18) {
    console.log("Você é maior de idade")
}else {
    console.log("Você é menor de idade")
}
