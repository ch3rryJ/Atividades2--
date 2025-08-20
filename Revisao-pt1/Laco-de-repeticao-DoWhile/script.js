// ATV1 ------------------------------------------------------------
console.log("ATV1 --------------------------------------------------")
let d = 1
do {
  console.log(d)
  d++
} while (d <= 20)

// ATV2 ------------------------------------------------------------
console.log("ATV2 --------------------------------------------------")
let resposta
do {
  resposta = prompt("Deseja continuar? (s ou n)")
} while (resposta === "s")

// ATV3 ------------------------------------------------------------
console.log("ATV3 --------------------------------------------------")
let limite = parseInt(prompt("Digite até qual número deseja contar"))
let k = 1
do {
  console.log(k)
  k++
} while (k <= limite)

// ATV4 ------------------------------------------------------------
console.log("ATV4 --------------------------------------------------")
let p = 1
do {
  console.log(p)
  p += 2
} while (p <= 31)