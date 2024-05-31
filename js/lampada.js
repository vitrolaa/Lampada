const turnOn = document.getElementById("buttonOn");
const turnOff = document.getElementById("buttonOff");
const lamp = document.getElementById("lamp");

function isLampBroken() {
    return lamp.src.indexOf("quebrada") > -1;
}

function ligarOn() {
    if (!isLampBroken()) {
        lamp.src = '/img/ligada.jpeg';
      
    }
}

function desligarOff() {
    if (!isLampBroken()) {
        lamp.src = '/img/desligada.jpeg';
    }
}

function quebrarLamp() {
    lamp.src = '/img/quebrada.jpeg';
}

function restaurarLamp(){
    if(isLampBroken()){
        lamp.src = '/img/desligada.jpeg';
    }
}


turnOn.addEventListener('click', ligarOn);
turnOff.addEventListener('click', desligarOff);
buttonReset.addEventListener('click', restaurarLamp)
buttonBroken.addEventListener('click', quebrarLamp)
lamp.addEventListener('mouseover', ligarOn);
lamp.addEventListener('mouseout', desligarOff);
lamp.addEventListener('dblclick', quebrarLamp);