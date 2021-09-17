



function promediolistaGeneral(lista){

  /*   let sumalista = 0;

        for(let i = 0; i < lista.length; i++){
            sumalista = sumalista + lista[i];
        }
 */

    const sumalista = lista.reduce(
        function listareduce(preciolista = 0, precioNuevo){
            return preciolista + precioNuevo;

        }
    )

    const promediolista = sumalista / lista.length;

        return promediolista;

}



