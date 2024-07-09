/**
 * función calcularMayor
 * auto: CristianJPalma
 * fecha: 5 de julio de 2024
 */

function calcularMayor(){
    let numUno = document.getElementById('num1').value;
    let numDos = document.getElementById('num2').value;
    let diferencia;
   
    if(numUno == numDos){
        diferencia = "Los dos numeros son iguales"
    }
    else if (numUno > numDos){
        diferencia = "El primer numero es mayor"
    }
    else if(numUno < numDos){
        diferencia = "El segundo numero es mayor"
    }
    document.getElementById('descripcion').innerHTML=`<strong>Descripcion: </strong>${diferencia}`;
    return false;
}