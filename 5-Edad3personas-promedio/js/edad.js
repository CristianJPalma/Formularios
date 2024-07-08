/**
 * función calcularEdad
 * auto: CristianJPalma
 * fecha: 14 de junio de 2024
 */


function calcularEdad() {
    let fechaNacimiento1 = new Date(document.getElementById('fecha1').value);
    let fechaNacimiento2 = new Date(document.getElementById('fecha2').value);
    let fechaNacimiento3 = new Date(document.getElementById('fecha3').value);
    let descripcion1;
    let descripcion2;
    let descripcion3;
    
    let edad1 = obtenerEdad(fechaNacimiento1);
    let edad2 = obtenerEdad(fechaNacimiento2);
    let edad3 = obtenerEdad(fechaNacimiento3);

    if(edad1>17){
        descripcion1 = "Es mayor de edad"
    }
    else{
        descripcion1 = "Es menor de edad"
    }
    if(edad2>17){
        descripcion2 = "Es mayor de edad"
    }
    else{
        descripcion2 = "Es menor de edad"
    }
    if(edad3>17){
        descripcion3 = "Es mayor de edad"
    }
    else{
        descripcion3 = "Es menor de edad"
    }
    document.getElementById('descripcion1').innerHTML = `<strong>Descripcion: </strong>${descripcion1}`;
    document.getElementById('descripcion2').innerHTML = `<strong>Descripcion: </strong>${descripcion2}`;
    document.getElementById('descripcion3').innerHTML = `<strong>Descripcion: </strong>${descripcion3}`;

    document.getElementById('edadUno').innerHTML = `<strong>Edad: </strong>${edad1}`;
    document.getElementById('edadDos').innerHTML = `<strong>Edad: </strong>${edad2}`;
    document.getElementById('edadTres').innerHTML = `<strong>Edad: </strong>${edad3}`;

    return false;
}

function obtenerEdad(fechaNacimiento) {
    const hoy = new Date();
    let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
    const mes = hoy.getMonth() - fechaNacimiento.getMonth();

    if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNacimiento.getDate())) {
        edad--;
    }

    return edad;
}
