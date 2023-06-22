let Nomedojogador;
let Resposta;

Nomedojogador = document.getElementById("Nomedojogador")

Resposta = document.getElementById("resposta")

function apertar() 
{
    if(Nomedojogador.value == "")
    {
        Resposta.innerHTML = "insira um nome"
    }
    else{
        
    Resposta.innerHTML = "olá " + Nomedojogador.value + ". Vamos jogar!"
    }
    
    
}