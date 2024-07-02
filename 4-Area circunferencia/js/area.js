/**
 * función calcularArea
 * auto: CristianJPalma
 * fecha: 14 de junio de 2024
 */

function calcularArea(){
    let radio = document.getElementById('radio').value;
    let pi = 3.1415
    let area = (radio * radio)* pi;
    area = document.getElementById('resultado').innerHTML=`<strong>Area: </strong>${area}`;
    return false;
}