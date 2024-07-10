/**
 * función tablaMultiplicar
 * autor: CristianJPalma
 * fecha: 14 de junio de 2024
 */

function tablaMultiplicar() {
    let tabla = document.getElementById('numTabla').value;
    let numero = document.getElementById('numero').value;
    let mostrar = '';
    let descripcion
    for(let contador = 1; contador <= numero; contador ++){
         let resultado = tabla * contador;
         if((resultado % 2)==0){
            descripcion = "El resultado es par"
        }
        else{
            descripcion = "El resultado es impar"
        }
         mostrar += `<strong>${tabla} x ${contador} = ${resultado} </strong><br/> ${descripcion}<br/>`;
    }
    document.getElementById('tabla').innerHTML = mostrar;
    
    return false;
}