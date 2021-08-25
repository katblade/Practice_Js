
const pi = Math.PI;


function perimetroCuadrado(lado){
    return lado * 4;
}

function areaCuadrado(lado){
    return lado * lado;
}

function perimetroTriangulo(lado, base){
    return lado + lado + base;
}

function areaTriangulo(lado, base){
    return (lado * base)/2;
}

function diametroCirculo(radio){
    return radio * 2;
}

function circunferencia(radio){
    const diametro = diametroCirculo(radio);
    return diametro * pi;
}

function areaCirculo(radio){
    return pi * (radio * radio);
}


//interactuar con el html

function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);

}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

function calcularPerimetroTriangulo(){
    const inputlado = document.getElementById("InputTrianguloLado");
    const inputBase = document.getElementById("InputTrianguloBase");
    const valueLado = parseInt(inputlado.value);
    const valueBase = parseInt(inputBase.value);

    const perimetroTr = perimetroTriangulo(valueLado, valueBase);
    alert(perimetroTr);
}

function calcularAreaTriangulo(){
    const inputlado = document.getElementById("InputTrianguloLado");
    const inputBase = document.getElementById("InputTrianguloBase");
    const valueLado = parseInt(inputlado.value);
    const valueBase = parseInt(inputBase.value);

    const areaTr = areaTriangulo(valueLado, valueBase);
    alert(areaTr);
}

function calcularCircunferencia(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const perimetroCirculo = circunferencia(value);
    alert(perimetroCirculo);
}

function calcularAreaCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const area = areaCirculo(value);
    alert(area);
}

// triangulo isoceles
 function alturaIso(lado1, lado2, base){
     const altura = Math.sqrt((lado1 * lado2) - ((base/2) * (base/2)));
     if(lado1 === lado2 && lado1 != base){
        return altura;
     }
     else{
         alert("ingresa un tringulo isoceles válido");
     }
    
    
 }

 function calcularAlturaIso(){
     const inputlado1 = document.getElementById("InputTrianguloLadoiso1");
     const inputlado2 = document.getElementById("InputTrianguloLadoiso2");
     const inputbase = document.getElementById("InputTrianguloBaseiso");
     const valuelado1 = parseInt(inputlado1.value);
     const valuelado2 = parseInt(inputlado2.value);
     const valuebase = parseInt(inputbase.value);

     const alturaiso = alturaIso(valuelado1, valuelado2, valuebase);
     alert(alturaiso);
 }