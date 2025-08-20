// ATV1 ------------------------------------------------------------
console.log("ATV1 --------------------------------------------------")

let dia = Number(prompt("Digite um número de 1 a 7"))
switch (dia) {
  case 1:
    console.log("Domingo")
    break
  case 2:
    console.log("Segunda-feira")
    break
  case 3:
    console.log("Terça-feira")
    break
  case 4:
    console.log("Quarta-feira")
    break
  case 5:
    console.log("Quinta-feira")
    break
  case 6:
    console.log("Sexta-feira")
    break
  case 7:
    console.log("Sábado")
    break
  default:
    console.log("Número inválido. Insira um valor entre 1 e 7")
}

// aTV2 ------------------------------------------------------------
console.log("ATV2 --------------------------------------------------")

let idade = Number(prompt("Digite a idade"))
switch (idade) {
  case 5:
    console.log("Infantil A")
    break
  case 10:
    console.log("Infantil B")
    break
  case 15:
    console.log("Juvenil A")
    break
  case 20:
    console.log("Juvenil B")
    break
  case 30:
    console.log("Adulto")
    break
  default:
    console.log("Idade inválida. Insira 5, 10, 15, 20 ou 30")
}

// ATV3 ------------------------------------------------------------
console.log("ATV3 --------------------------------------------------")

let turno = prompt("Digite seu turno (M, V ou N)")
switch (turno) {
  case "M":
    console.log("Bom dia")
    break
  case "V":
    console.log("Boa tarde")
    break
  case "N":
    console.log("Boa noite")
    break
  default:
    console.log("Turno inválido. Insira M, V ou N")
}

// ATV4 ------------------------------------------------------------
console.log("ATV4 --------------------------------------------------")

let estacao = Number(prompt("Digite um número de 1 a 4"))
switch (estacao) {
  case 1:
    console.log("Primavera")
    break
  case 2:
    console.log("Verão")
    break
  case 3:
    console.log("Outono")
    break
  case 4:
    console.log("Inverno")
    break
  default:
    console.log("Estação inválida. Insira um número de 1 a 4")
}