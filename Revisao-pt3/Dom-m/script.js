// atv1-------------------------
// Trocando Textos
let paragrafo = document.getElementById("mensagem")
botao.addEventListener("click", function() {
   paragrafo.innerText = "Texto Alterado com JS"
})

// atv2-------------------------
//Personalizando a página
document.getElementById("botao2").addEventListener("click", function() {
  document.body.style.backgroundColor = "blue"
})

// atv3-------------------------
document.getElementById("botao3").addEventListener("click", function() {
  let novoItem = document.createElement("li")
  novoItem.innerText = "Novo item"
  document.getElementById("lista").appendChild(novoItem)
})

// atv4-------------------------
document.getElementById("botao4").addEventListener("click", function() {
  let apagar = document.getElementById("apagar")
  apagar.remove()
})
// atv5-------------------------
document.getElementById("botao5").addEventListener("click", function() {
  let paragrafo = document.getElementById("mensagem")
  paragrafo.style.color = "blue"
  paragrafo.style.fontSize = "20px"

  let titulo = document.getElementById("titulo")
  titulo.style.color = "green"
  titulo.style.fontSize = "35px"
})