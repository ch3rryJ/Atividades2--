// ATV1 ------------------------------------------------------------
console.log("ATV1 --------------------------------------------------")

let filmes = ["Avatar", "Como treinar o seu dragão", "Para todos os garotos que ja amei"]
console.log(filmes[0])

// ATV2 ------------------------------------------------------------
console.log("ATV2 --------------------------------------------------")

let frutas = ["maçã", "banana", "uva", "laranja", "melancia"]
console.log(frutas[2])

// ATV3 ------------------------------------------------------------
console.log("ATV3 --------------------------------------------------")

let cores = ["azul", "vermelho", "verde"]
cores.push("amarelo")
for (let i = 0; i < cores.length; i+= 1) {
  console.log(cores[i])
}

// ATV4 ------------------------------------------------------------
console.log("ATV4 --------------------------------------------------")

let numeros = [1, 2, 3, 4]
numeros.pop()
for (let i = 0; i < numeros.length; i+= 1) {
  console.log(numeros[i])
}

// ATV5 ------------------------------------------------------------
console.log("ATV5 --------------------------------------------------")

let cidades = ["São Paulo", "Rio de Janeiro"]
cidades.unshift("Curitiba")
for (let i = 0; i < cidades.length; i+= 1) {
  console.log(cidades[i])
}