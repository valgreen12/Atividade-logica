let x = document.getElementById("botao")
let area = document.getElementById("Area")
let base = document.getElementById("base")
let altura = document.getElementById("altura")
let resultado

x.addEventListener('click', apertar)

function apertar() {
    resultado = (parseFloat(altura.value) * parseFloat(base.value)) /2
    area.innerHTML = resultado
    console.log(area)
}