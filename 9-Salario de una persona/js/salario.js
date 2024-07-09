/**
 * función calcularSalario
 * auto: CristianJPalma
 * fecha: 5 de julio de 2024
 */

function calcularSalario(){
    let numDias = document.getElementById('numDias').value;
    let valorDias = document.getElementById('valorDia').value;
    let salario = numDias * valorDias;
    return salario;
}

function calcularSalud(){
    let salarioPersona = calcularSalario();
    let saludPersona = salarioPersona * 0.12;
    return saludPersona;
}
function calcularSubTransporte(){
    let salarioPersona = calcularSalario();
    let salarioMinimo = document.getElementById('salarioMinimo').value;
    let subTrasnporte;
    if(salarioPersona <=(salarioMinimo * 2)){
        subTrasnporte = 162000;
    }
    else{
        subTrasnporte = 0
    }
    return subTrasnporte;
}
function calcularPension(){
    let salarioPersona = calcularSalario();
    let pensionPersona = salarioPersona * 0.16;
    return pensionPersona;
}

function calcularArl(){
    let salarioPersona = calcularSalario();
    let ArlPersona = salarioPersona * 0.052;
    return ArlPersona;
}
function calcularRetencion(){
    let salarioPersona = calcularSalario();
    let salarioMinimo = document.getElementById('salarioMinimo').value;;
    let retencion;
    if(salarioPersona >= (salarioMinimo * 4)){
        retencion = salarioPersona * 0.04
    }
    else{
        retencion = 0
    }
    return retencion;
}
function calcularDeducibles(){
    let salud = calcularSalud()
    let pension = calcularPension()
    let arl = calcularArl()
    let retencion = calcularRetencion()
    let descuento = salud + pension + arl + retencion;
    return descuento;
}
function calcularSalarioTotal(){
    let salarioPersona = calcularSalario();
    let subTrasnporte = calcularSubTransporte();
    let deducible = calcularDeducibles();
    let salarioTotal = salarioPersona + subTrasnporte - deducible;
    document.getElementById('salario').innerHTML=`<strong>Salario: </strong>${salarioPersona}`;
    document.getElementById('subTransporte').innerHTML=`<strong>Subsidio de Transporte: </strong>${subTrasnporte}`;
    document.getElementById('deducible').innerHTML=`<strong>Descuentos: </strong>${deducible}`;
    document.getElementById('salarioTotal').innerHTML=`<strong>Salario total: </strong>${salarioTotal}`;
    return false;
}