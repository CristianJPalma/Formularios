/**
 * función promedio
 * auto: CristianJPalma
 * fecha: 14 de junio de 2024
 */

function promedio(){
    
    let numUno = parseInt(document.getElementById('numUno').value);
    let numDos = parseInt(document.getElementById('numDos').value);
    let numTres = parseInt(document.getElementById('numTres').value);
    let promedio = (numUno + numDos + numTres) / 3;
    promedio = document.getElementById('resultado').innerHTML=`<strong>Promedio: </strong>${promedio}`;
    return false
    
}