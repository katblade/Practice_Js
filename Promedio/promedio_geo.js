const listone = [
    8,
    9,
    6,
    9,
    10,
    7,
    
]

//con los datos hacer la operacion
var total = 1;

function Productlist(){

    for (var i = 0; i < listone.length; i++){
        if(listone[i] != 0){
            total = (listone[i] * total);
        }
    }return total;

}

var potencia = 1;



function GeometricProduc(listone){
    
    GPR = Math.pow(Productlist(), potencia/listone.length);
    
    return GPR;
}

//mostrar resultados

//sincronizar con html

