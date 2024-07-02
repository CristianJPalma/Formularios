/**
 * función calcularEdad
 * auto: CristianJPalma
 * fecha: 14 de junio de 2024
 */


function calcularEdad() {
    let fechaNacimiento1 = document.getElementById('fecha').value;
    let hoy1 = new Date();
    let fechaNac1 = new Date(fechaNacimiento1);
    let edad1 = hoy1.getFullYear() - fechaNac1.getFullYear();
    let mes1 = hoy.getMonth() - fechaNac1.getMonth();
    let descripcion1;

    if (mes1 < 0 || (mes1 === 0 && hoy1.getDate() < fechaNac1.getDate())) {
        edad1--;
    }
    if(edad1<18){
        descripcion1 = "Es menor de edad"
    }
    else if(edad1>17){
        descripcion1 = "Es mayor de edad"
    }
    let fechaNacimiento2 = document.getElementById('fechaDos').value;
    let hoy2 = new Date();
    let fechaNac2 = new Date(fechaNacimiento2);
    let edad2 = hoy2.getFullYear() - fechaNac2.getFullYear();
    let mes2 = hoy2.getMonth() - fechaNac2.getMonth();3
    let descripcion2;

    if (mes2 < 0 || (mes2 === 0 && hoy2.getDate() < fechaNac2.getDate())) {
        edad2--;
    }
    if(edad2<18){
        descripcion2 = "Es menor de edad"
    }
    else if(edad2>17){
        descripcion2 = "Es mayor de edad"
    }
    let fechaNacimiento3 = document.getElementById('fechaTres').value;
    let hoy3 = new Date();
    let fechaNac3 = new Date(fechaNacimiento3);
    let edad3 = hoy.getFullYear() - fechaNac3.getFullYear();
    let mes3 = hoy.getMonth() - fechaNac3.getMonth();
    let descripcion3;

    if (mes3 < 0 || (mes3 === 0 && hoy3.getDate() < fechaNac3.getDate())) {
        edad3--;
    }
    if(edad3<18){
        3 = "Es menor de edad"
    }
    else if(edad>17){
        descripcion3 = "Es mayor de edad"
    }
    edad1 = document.getElementById('edadUno').innerHTML=`<strong>Edad: </strong>${edad1}`;
    descripcion1 = document.getElementById('descripcionUno').innerHTML=`<strong>Descripcion: </strong>${descripcion1}`;
    edad2 = document.getElementById('edadDos').innerHTML=`<strong>Edad: </strong>${edad2}`;
    descripcion2 = document.getElementById('descripcionDos').innerHTML=`<strong>Descripcion: </strong>${descripcion2}`;
    edad3 = document.getElementById('edadTres').innerHTML=`<strong>Edad: </strong>${edad3}`;
    descripcion3 = document.getElementById('descripcionTres').innerHTML=`<strong>Descripcion: </strong>${descripcion3}`
    return false;
}
 