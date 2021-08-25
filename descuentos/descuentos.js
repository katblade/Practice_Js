//crear funcion
const cupones = [
    {
        name: "cup0n1",
        discount: 25
    },
    {
        name: "cup0n2",
        discount: 15
    },
    {
        name: "cup0n3",
        discount: 30
    }
]


function calcularPrecio(descuento, precio){
    const PorcentajeConDescuento = 100 - descuento;
    const PrecioConDescuento = (precio * PorcentajeConDescuento)/100;

    return(PrecioConDescuento);
}


//relacionar html con Js

function PriceDiscount(){
    const discount = document.getElementById("InputDiscount");
    const price = document.getElementById("InputPrice");
    const realprice = price.value;
    const realdiscount = discount.value;

    const validcoupon = function(cupones){
        return cupones.name === realdiscount;
    }

    const usercoupon = cupones.find(validcoupon);

    if(!usercoupon){
        alert("El cupon " + realdiscount + " no es valido");
    }
    else{
        const descuento = usercoupon.discount;
        const realPriceDiscount = calcularPrecio(descuento, realprice);

        const resultP = document.getElementById("ResultP");

        resultP.innerText = "EL precio con descuento es: $" + realPriceDiscount;
    }


}

//agregar el resultado del descuento

