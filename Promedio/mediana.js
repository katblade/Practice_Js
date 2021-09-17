function promediolistaGeneral(lista){


    const sumalista = lista.reduce(
        function listareduce(preciolista = 0, precioNuevo){
            return preciolista + precioNuevo;

        }
    )

    const promediolista = sumalista / lista.length;

        return promediolista;

}


function CalcularMediana(Lista){
    
    const nuevaLista = lista.sort((a, b) => a -b);

    const middleList1 = parseInt(nuevaLista.length / 2);

    function numeroPar(numero){
        if(numero % 2 === 0){
            return true;
        }else{
            return false;
    }
}

        let mediana;

    if(numeroPar(nuevaLista.length)){

        const elemento1 = nuevaLista[middleList1];
        const elemento2 = nuevaLista[middleList1 - 1];

        const promedioMediana = promediolistaGeneral([elemento1, elemento2]);

        mediana = promedioMediana;

    }else{
        mediana = nuevaLista[middleList1];
    }
}



