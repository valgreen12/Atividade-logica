let car = {
    Modelo : 'fiat',
    ano : 2023,
    cor : "Azul",
}

let Fernando =
{
    PRimeironome : "Fernando",
    Segundonome:"Ximenes",
    idade : 18,
    Escola : "Zacarias",
    Altura: 1.85,
    peso:97,
    fullName :function()
    {
        return this.PRimeironome + " " + this.Segundonome
    }
}

const tarefas = 
[
{
    id : 1,
    texto: 'Levar o lixo para fora',
    completado: true,

},
{
    id:2,
    texto : 'Dormir',
    completado: true,
}
]