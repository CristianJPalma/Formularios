/**
 * función calcularArea
 * auto: CristianJPalma
 * fecha: 14 de junio de 2024
 */

function calcularArea(){
    let baseUno = document.getElementById('baseUno').value;
    let alturaUno = document.getElementById('alturaUno').value;
    let baseDos = document.getElementById('baseDos').value;
    let alturaDos = document.getElementById('alturaDos').value;
    let areaUno = baseUno * alturaUno;
    let areaDos = baseDos * alturaDos;
    let descripcion;
    if(areaUno == areaDos){
        descripcion = "El area de los dos rectangulos son iguales"
    }
    else if(areaUno > areaDos){
        descripcion = "El area del primer rectangulo es mayor"
    }
    else if(areaUno < areaDos){
        descripcion = "El area del segundo rectangulo es mayor"
    }
    
    document.getElementById('descripcion').innerHTML=`<strong>descripcion: </strong>${descripcion}`;
    document.getElementById('areaUno').innerHTML=`<strong>Area primer rectangulo: </strong>${areaUno}`;
    document.getElementById('areaDos').innerHTML=`<strong>Area segundo rectangulo: </strong>${areaDos}`;
    return false;
}