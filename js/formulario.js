let aid = document.getElementById('paragrafo');
let adi = document.getElementById('para');
let bosnia = document.getElementById('menos');
let zambia = document.getElementById('muito');
let ads = document.getElementById('tank');
let mais = document.getElementById('input');
let secou = document.getElementById('seco');
let brasil = document.getElementById('pouco');
let adiciona = document.getElementById('vazio');
let adicionado = document.getElementById('vago');
let botao = document.getElementById('valor')

function negado() {
    if (mais.value=="") {
        aid.innerHTML = "negado"
    }else{
        aid.innerHTML = ""
    }
    if (adiciona.value == "") {
        adi.innerHTML = "negado"
    }else{
        adi.innerHTML = ""
    }
    if (adicionado.value == "") {
        ads.innerHTML = "negado"
    }else{
        ads.innerHTML = ""
    }
    if (secou.value == "") {
        bosnia.innerHTML = "negado"
    }else{
        bosnia.innerHTML = ""
    }
    if (brasil.value == "") {
        zambia.innerHTML = "negado"
    }else{
        zambia.innerHTML = ""
    }
}
botao.addEventListener('click', negado);
