let idade = document.getElementById("idade");
let titulo = document.getElementById("titulo");

function apertar() 
{
    if(idade.value >= 16 && titulo.value == "sim")
    {
            alert("Poderá votar")
    }
    else
    {
            alert("não poderá votar")
    }    
}
