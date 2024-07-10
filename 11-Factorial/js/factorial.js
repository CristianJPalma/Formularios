/**
 * función factorial
 * autor: CristianJPalma
 * fecha: 14 de junio de 2024
 */

function factorial() {
    let numero = document.getElementById('numFactor').value;
    let factorial = 1;
    for (let contador = 1; contador <= numero; contador++) {
        factorial *= contador;
    }
    document.getElementById('factorial').innerHTML = `<strong>!${numero} = ${factorial} </strong>`;
    return false;
}