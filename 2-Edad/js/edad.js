/**
 * función calcularEdad
 * auto: CristianJPalma
 * fecha: 14 de junio de 2024
 */


function calcularEdad() {
    let fechaNacimiento = document.getElementById('fecha').value;
    let hoy = new Date();
    let fechaNac = new Date(fechaNacimiento);
    let edad = hoy.getFullYear() - fechaNac.getFullYear();
    let mes = hoy.getMonth() - fechaNac.getMonth();
    let descripcion;

    if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNac.getDate())) {
        edad--;
    }
    if(edad<18){
        descripcion = "Es menor de edad"
    }
    else if(edad>17){
        descripcion = "Es mayor de edad"
    }
    edad = document.getElementById('edad').innerHTML=`<strong>Edad: </strong>${edad}`;
    descripcion = document.getElementById('descripcion').innerHTML=`<strong>Descripcion: </strong>${descripcion}`;
    return false;
}
 