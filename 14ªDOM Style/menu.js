let menu = document.getElementById("mySidebar")
let conteudo = document.getElementById('main')
function openNav() {
    menu.style.width = '250px'
    conteudo.style.marginLeft = '250px'
    
}

function closenav(params) {
    menu.style.width = '0'
    conteudo.style.marginLeft = '0px'
}