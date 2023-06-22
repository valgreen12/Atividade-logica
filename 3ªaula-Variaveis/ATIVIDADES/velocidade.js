let v = document.getElementById("velocidade")
let calcular = document.getElementById("Resultado")
function play(){
    if (v.value> 80) {
        let somar = (v.value - 80)
        let mult = (somar * 5)
        calcular.innerHTML =("Você foi multado em: R$" + mult)
    } else {    
        calcular.innerHTML =("Você não foi multado")
    }
}