let nota1 = document.getElementById("Nota1");
let nota2 = document.getElementById("Nota2");
let nota3 = document.getElementById("Nota3");
let nota4 = document.getElementById("Nota4");
let Nome = document.getElementById("nome");
let media;
let Valor = document.getElementById("valor") 

 

function verificar() {
    nota1.value;
    nota2.value;
    nota3.value;
    nota4.value;
    media = (parseInt(nota1.value)+ parseInt(nota2.value)+ parseInt(nota3.value)+ parseInt(nota4.value))/4
    
    if (media >=7) {
    Valor.innerHTML = ("Parabens " + Nome.value + ", Você foi aprovado com uma media de " + media );
        
    } else {
        Valor.innerHTML = (Nome.value + " você foi reprovado com uma média de " + media)
    }
    
}