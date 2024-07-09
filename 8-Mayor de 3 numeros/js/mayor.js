/**
 * función calcularMayor
 * auto: CristianJPalma
 * fecha: 5 de julio de 2024
 */

function calcularMayor(){
    let numUno = document.getElementById('num1').value;
    let numDos = document.getElementById('num2').value;
    let numTres = document.getElementById('num3').value;
    let diferencia;
   
    if((numUno == numDos) && (numDos == numTres)){
        diferencia = "Los tres numeros son iguales"
    }
    else if ((numUno > numDos) && (numUno > numTres)){
        diferencia = "El primer numero es mayor"
    }
    else if((numDos > numUno) && (numDos > numTres)){
        diferencia = "El segundo numero es mayor"
    }
    else{
        diferencia = "El tercer numero es mayor"
    }
    document.getElementById('descripcion').innerHTML=`<strong>Descripcion: </strong>${diferencia}`;
    return false;
}