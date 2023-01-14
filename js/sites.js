let contador = 0;
let input = document.getElementById('inputTarefa');
let btnAdd = document.getElementById('btnadd');
let main = document.getElementById('areaLista');

function addTarefa() {
            let valorInput = input.value;
    
if ((valorInput !== "") && (valorInput !== null) && (valorInput !== undefined)) {
   
    ++contador;
   
    let novoItem = `<div id="${contador}" class="item clicado">
    
        <div id="icone_${contador}" onclick="marcarTarefa(${contador})" class="item-icone">
            <h1>O</h1>
        </div>
            <div ondblclick="desfazer()" onclick="marcarTarefa(${contador})" class="item-nome">
               ${valorInput}
            </div>
            <div class="item-botao">
    <button onclick="deletar(${contador})" class="delete">Deletar</button>
            </div>
        
    </div>`;


    main.innerHTML += novoItem;

    input.value = "";
    input.focus();
}
}
function deletar(id) {
var tarefa = document.getElementById(id);
tarefa.remove();
}



/*
 var item = document.getElementById(id);   
 var classe = item.getAttribute('segundo');

 if(classe == "item") {
    item.classList.add('item-clicado');

    
 }else{
    item.classList.remove('item-clicado');

    
    
 }
    var icone = document.getElementById('icone_' +id);
    icone.classList.remove('item');
    icone.classList.add('clicado');

    var icone = document.getElementById('icone_' +id);
    icone.classList.remove('clicado');
    icone.classList.add('item');
*/


















