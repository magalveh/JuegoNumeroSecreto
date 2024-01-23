let listaNumerosSorteados = [];
asignarTextoaElemento('h1', "JUEGO NUEVO");
asignarTextoaElemento('p', "Indica un número del 1 al 10: ");
let numeroSecreto = generarNumSecreto();
let cantidadIntentos = 1;
listaNumerosSorteados.push(numeroSecreto);

function intentoDeUsuario(){
    let numeroIngresado = parseInt(document.getElementById('valorUsuario').value);

    if (numeroIngresado==numeroSecreto){
        asignarTextoaElemento('p', `Felicitaciones, has acertado al número en ${cantidadIntentos} ${(cantidadIntentos==1) ? 'intento' : 'intentos'}.`);
        document.getElementById('reiniciar').removeAttribute('disabled');
        document.getElementById('ingresar').setAttribute('disabled', true);

    } else{
        if (numeroIngresado>numeroSecreto){
            asignarTextoaElemento('p', `El número secreto es menor que ${numeroIngresado}, Intenta ingresando otro número entre 1 y ${numeroIngresado}: `);
        } else{
            asignarTextoaElemento('p', `El número secreto es mayor que ${numeroIngresado}, Intenta ingresando otro número entre ${numeroIngresado} y 10: `);
        }
    }
    cantidadIntentos++;
    limpiarCaja();
    return;
};

function reiniciarJuego(){
    limpiarCaja();
    if (listaNumerosSorteados.length==10){ listaNumerosSorteados=[]; alert("Has logrado advinar todos los números de la lista. El juego se reiniciará por completo.")};
    cantidadIntentos = 1;
    asignarTextoaElemento('p', "Indica un número del 1 al 10: ");
    numeroSecreto = generarNumSecreto();
    document.getElementById('reiniciar').setAttribute('disabled', true);
    document.getElementById('ingresar').removeAttribute('disabled');
};

function asignarTextoaElemento(elemento, texto){
    let titulo = document.querySelector(elemento);
    titulo.innerHTML = texto;
    return;
};

function generarNumSecreto(){
    let numeroSecreto = Math.floor(Math.random()*10)+1;
    if (listaNumerosSorteados.includes(numeroSecreto)){
        return generarNumSecreto();
    } else {
        listaNumerosSorteados.push(numeroSecreto);
        return numeroSecreto;
    };
};

function limpiarCaja(){
    let valorCaja = document.querySelector('#valorUsuario');
    valorCaja.value = '';
    return;
};