
      function contar() {
        for(let cont = 0; cont <= 10; cont++) {
            document.getElementById("contador").innerHTML += cont;
        }
      }
      let data = new Date ();
      document.getElementById("data").innerHTML += data;
      let ano = data.getFullYear();
      document.getElementById("data").innerHTML += ano;
      let mes = data.getMonth()
      document.getElementById("data").innerHTML += mes;
      
      var hora = new Date().getHours();
      
      if (hora < 12) {
      document.getElementById("hoje").innerHTML += "bom dia Danilo";
      }else if (hora < 18){
        document.getElementById("hoje").innerHTML += " boa tarde Danilo";
      }else{
        document.getElementById("hoje").innerHTML +=  " boa noite Danilo";
      }
      
      window.onload = function () {

var seconds = 00;
var tens = 00;
var appendTens = document.getElementById("tens")
var appendSeconds = document.getElementById("seconds")
var buttonStart = document.getElementById('button-start');
var buttonStop = document.getElementById('button-stop');
var buttonReset = document.getElementById('button-reset');
var Interval ;

buttonStart.onclick = function() {

    clearInterval(Interval);
    Interval = setInterval(startTimer, 10);
}
buttonStop.onclick = function () {
    clearInterval(Interval);
}
buttonReset.onclick = function () {
    clearInterval(Interval);
    tens = "00";
    seconds = "00";
    appendTens.innerHTML = tens;
    appendSeconds.innerHTML = seconds;
}
    function startTimer () {
        tens++;

        if(tens <= 9){
            appendTens.innerHTML = "0" + tens;
        }
        if(tens > 9){
            appendTens.innerHTML = tens;
        }
        if (tens > 99) {
            console.log("seconds");
            seconds++;
            appendSeconds.innerHTML = "0" + seconds;
            tens = 0;
            appendTens.innerHTML = "0" + 0;
        }
        if (seconds > 9) {
            appendSeconds.innerHTML = seconds;
        }

    }
}

let otimo = document.getElementById("verde");
function verde() {
    otimo.innerHTML = `
    <div id="verde" class="verde">Ok</div>`
}
function amarela() {
    otimo.innerHTML = `<div class="amarela">Alerta</div>`
}
function vermelha() {
    otimo.innerHTML = `<div class="vermelha">Perigo</div>`
}

























