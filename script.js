var cronometro;
var segundos = 0;
var minutos = 0;
var horas = 0;

function atualizarCronometro(){
    segundos++;
    if(segundos == 60){
        segundos = 0;
        minutos++;
        if(minutos == 60){
            minutos = 0;
            horas++;
        }
    }

    var formato = (horas < 10 ? "0" : "") + horas + ":" +
    (minutos < 10 ? "0" : "") + minutos + ":" +
    (segundos < 10 ? "0" : "") + segundos;

    document.getElementById('cronometro').innerText = formato;
}

function inciarCronometro(){
    cronometro = setInterval(atualizarCronometro, 1000);
}

function pausarCronometro(){
    clearInterval(cronometro);
}


function pararCronometro(){
    clearInterval(cronometro);
    horas = 0;
    minutos  = 0;
    segundos = 0;
    document.getElementById('cronometro').innerText = "00:00:00";

}