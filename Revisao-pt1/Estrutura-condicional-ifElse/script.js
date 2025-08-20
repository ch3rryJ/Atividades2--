// ATV1 ------------------------------------------------------------
console.log("ATV1 ------------------------------------------------------------")
let idade = Number(prompt("Digite sua idade:"))

if (idade >= 18) {
  console.log("Você é maior de idade")
} else {
  console.log("Você é menor de idade")
}

// ATV2 ------------------------------------------------------------
console.log("ATV2 ------------------------------------------------------------")
let nota = 8

if (nota >= 7) {
  console.log("Aprovado")
} else {
  console.log("Reprovado")
}

// ATV3 ------------------------------------------------------------
console.log("ATV3 ------------------------------------------------------------")  
let temperatura = Number(prompt("Digite a temperatura em °C:"))

if (temperatura > 30) {
  console.log("Está quente")
} else {
  console.log("Está frio")
}

// ATV4 ------------------------------------------------------------
console.log("ATV4 ------------------------------------------------------------")
let idd = Number(prompt("Digite a idade:"))

if (idd < 12) {
  console.log("Criança")
} else if (idd < 17) {
  console.log("Adolescente")
} else if (idd < 59) {
  console.log("Adulto")
} else {
  console.log("Idoso")
}

// ATV5 ------------------------------------------------------------
console.log("ATV5 ------------------------------------------------------------")
let nota1 = Number(prompt("Digite a nota:"))

if (nota1 > 90) {
  console.log("A")
} else if (nota1 > 80) {
  console.log("B")
} else if (nota1 > 70) {
  console.log("C")
} else if (nota1 > 60) {
  console.log("D")
} else {
  console.log("F")
}


// ATV6 ------------------------------------------------------------
console.log("ATV6 ------------------------------------------------------------")
let distancia = Number(prompt("Digite a distância da pista:"))

if (distancia < 400) {
  console.log("Pista curta")
} else if (distancia < 800) {
  console.log("Pista média")
} else if (distancia < 1500) {
  console.log("Pista longa")
} else {
  console.log("Pista muito longa")
}


// ATV7 ------------------------------------------------------------
console.log("ATV7 ------------------------------------------------------------")
let pontuacao = Number(prompt("Digite a pontuação do jogador:"))

if (pontuacao < 1000) {
  console.log("Iniciante")
} else if (pontuacao < 5000) {
  console.log("Intermediário")
} else if (pontuacao < 10000) {
  console.log("Avançado")
} else {
  console.log("Mestre")
}
