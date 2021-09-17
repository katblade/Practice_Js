const lista1 = [
    1,
    2,
    3,
    4,
    3,
    5,
    3,
    2,
    1,
    5
];


const listaCount = {};

lista1.map(
    function(elemento){

        if(listaCount[elemento]){
            listaCount[elemento] += 1;
        }else{
            listaCount[elemento] = 1;
        }
        
    }
);

const listaArray = Object.entries(listaCount).sort(
    function (valorAcumulado, nuevoValor){
       return valorAcumulado[1] - nuevoValor[1];
    }
)


const moda = listaArray[listaArray.length - 1];