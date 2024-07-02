/**
 * función operaciones
 * auto: CristianJPalma
 * fecha: 14 de junio de 2024
 */

function operar(){
    let numUno = parseInt(document.getElementById('numUno').value);
    let numDos = parseInt(document.getElementById('numDos').value);
    let suma = numUno + numDos;
    let resta = numUno - numDos;
    let multiplicar = numUno * numDos;
    let divicion = numUno / numDos;
    suma = document.getElementById('suma').innerHTML=`<strong>Suma: </strong>${suma}`;
    resta = document.getElementById('resta').innerHTML=`<strong>Resta: </strong>${resta}`;
    multiplicar = document.getElementById('multiplicacion').innerHTML=`<strong>Multiplicacion: </strong>${multiplicar}`;
    divicion = document.getElementById('divicion').innerHTML=`<strong>Divicion: </strong>${divicion}`;
    return false;
}

