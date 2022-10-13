function calcular_conversion (importe , moneda){

let conversion;


if(moneda== "Dolar oficial"){
    conversion=importe * 155;
    return conversion
}
else if (moneda== "Dolar blue"){
    conversion=importe * 285;
    return conversion
}
else{
    console.log("Moneda incorrecta")
}

}





console.log('Bienvenidos/as al conversor de monedas online')

let importe = parseFloat(prompt("Ingrese el importe en pesos argentinos a convertir"));
let moneda = prompt("Seleccione la moneda a convertir: Dolar oficial o Dolar blue");


console.log("Solicitaste:", importe, "pesos argentinos" )
console.log("En:", moneda )
console.log("El total de la conversion es: $" , calcular_conversion (importe, moneda), "pesos argentinos") ;