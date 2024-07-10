/**
 * función contador
 * autor: CristianJPalma
 * fecha: 14 de junio de 2024
 */

function contador() {
    let numero = document.getElementById('numContar').value;
    let resultado = '';

    if (numero < 1 || numero > 666) {
        alert("Por favor, ingrese un número entre 1 y 666.");
        return false;
    }

    for (let contador = 1; contador <= numero; contador++) {
        resultado += `<strong>${contador}</strong><br>`;
    }

    document.getElementById('contador').innerHTML = resultado;
    return false;
}