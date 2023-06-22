let salario = document.getElementById("Salário")
let trabalho = document.getElementById("trabalho")

function analisar() {
    if (salario.value >= 3000 && trabalho.value >= 5) {
        alert("você deve pagar impostos")
        
    } else {
        alert("você está isento de impostos")
    }
    
}