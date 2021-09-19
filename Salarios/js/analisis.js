const salarycol = colombia.map(
    
    function (persona){
        return persona.salary;
    }

);


const salaryColSort = salarycol.sort(
    function (salaryA, SalaryB){
        return salaryA - SalaryB;

    }
);


function NumPar(numero){

    return (numero % 2 === 0);

}

function promediolistaGeneral(lista){


    const sumalista = lista.reduce(
        function (preciolista = 0, precioNuevo){
            return preciolista + precioNuevo;

        }
    )

    const promediolista = sumalista / lista.length;

        return promediolista;

}

function medianaSalarios(lista){

    const mitad = parseInt(lista.length / 2);

    if (NumPar(lista.length)){

        const middlePerson1 = lista[mitad - 1];
        const middlePerson2 = lista[mitad];

        const mediana = promediolistaGeneral([middlePerson1, middlePerson2]);

        return mediana;

    }else{

        const middlePerson = lista[mitad];
        return middlePerson;

    }

}

const medianaGeneralCol = medianaSalarios(salaryColSort);


//mediana del top 10%
const spliceStart = (salaryColSort.length * 90) / 100;
const spliceCount = salaryColSort.length - spliceStart;

const salarytop10Col = salaryColSort.splice(spliceStart, spliceCount,);

const medianaTop10Col = medianaSalarios(salarytop10Col);


console.log({
    medianaGeneralCol,
    medianaTop10Col,
});