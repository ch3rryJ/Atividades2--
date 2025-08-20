// ATV1 ------------------------------------------------------------
console.log("ATV1 --------------------------------------------------")

let anos = Number(prompt("Quantos anos você trabalha na empresa?"))
let projetos = prompt("Quantos projetos você realizou?")

console.log("Está elegível para promoção?", anos >= 5 || projetos > 10)

// ATV2 ------------------------------------------------------------
console.log("ATV2 --------------------------------------------------")

let idade = Number(prompt("Digite sua idade:"))

console.log("Pode entrar no evento?", idade >= 18 && idade <= 30)



// ATV3 ------------------------------------------------------------
console.log("ATV3 --------------------------------------------------")

let usuario = prompt("Digite o nome de usuário:")
let senha = Number(prompt("Digite a senha:"))

console.log("Login bem-sucedido?", usuario === "admin" && senha === "1234")



// ATV4 ------------------------------------------------------------
console.log("ATV4 --------------------------------------------------")

let numero = Number(prompt("Digite um número:"))

let intervalo1 = numero >= 10 && numero <= 20
let intervalo2 = numero >= 30 && numero <= 50

console.log("Está no intervalo entre 10 e 20?", intervalo1)
console.log("Está no intervalo entre 30 e 50?", intervalo2)
console.log("Está em algum dos dois intervalos?", intervalo1 || intervalo2)


