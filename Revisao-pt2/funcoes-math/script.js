//atv1------------------------------------
let aleatorio = Math.floor(Math.random() * 10) + 1
let chute = Number(prompt("Tente adivinhar o número de 1 a 10"))
if (chute === aleatorio) {
    console.log("Acertou!")
} else {
    alert("Errou! O número era: " + aleatorio)
}

console.log("atv2------------------------------------")
let decimal = Number(prompt("Digite um número decimal"))
console.log("Arredondado para cima: " + Math.ceil(decimal))
console.log("Arredondado para baixo: " + Math.floor(decimal))
console.log("Arredondado normalmente: " + Math.round(decimal))

console.log("atv3------------------------------------")
let maior = Math.max(5, 10, 8, 6, 2, 30, 50, 7, 3, 35) 
let menor = Math.min(5, 10, 8, 6, 2, 30, 50, 7, 3, 35) 
console.log("O maior valor é " , maior)
console.log("O menor valor é " , menor)

console.log("atv4------------------------------------")
let num = 4
console.log("Valor absoluto: " + Math.abs(num))
console.log("Elevado a 4: " + Math.pow(num, 4))
console.log("Raiz quadrada: " + Math.sqrt(num))

