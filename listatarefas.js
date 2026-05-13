let txtai = window.document.getElementById ('txtai')
let txtau = window.document.getElementById ('txtau')
let txtaf = window.document.getElementById ('txtaf')

function adicionarAI(){
    let listaAI = document.getElementById ('listaAI')
    let item = document.createElement ('li')
    item.innerHTML = txtai.value
    listaAI.appendChild (item)
}

function adicionarAU(){
    let listaAU = document.getElementById ('listaAU')
    let item = document.createElement ('li')
    item.innerHTML = txtau.value
    listaAU.appendChild (item)
}

function adicionarAF(){
    let listaAF = document.getElementById ('listaAF')
    let item = document.createElement ('li')
    item.innerHTML = txtaf.value
    listaAF.appendChild (item)
}