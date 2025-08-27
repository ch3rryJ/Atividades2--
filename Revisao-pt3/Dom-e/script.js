//atv1-------------------------

// Digitação
function mostrarTexto() {
    let texto = document.getElementById("texto").value
    document.getElementById("resposta").innerText = "Você digitou: " + texto
}

//atv2-------------------------
// Troca de texto
let botao = document.getElementById("botao")

botao.addEventListener("mouseover", function() {
  botao.innerText = "Você passou o mouse!"
})

//atv3-------------------------
// Escondendo elementos
let botao2 = document.getElementById("botao2")
let titulo = document.getElementById("titulo")

botao2.addEventListener("dblclick", function() {
  titulo.style.display = "none"
})

//atv4-------------------------
// Alterando a fonte
let botao3 = document.getElementById("botao3")
let textoalt = document.getElementById("textoalt")

botao3.addEventListener("click", function() {
  let tamanho = Math.floor(Math.random() * (40 - 10 + 1)) + 10
  textoalt.style.fontSize = tamanho + "px"
})