function calcLt (litros) {
    if (litros <= 25) {
        return 50
    } else {
        return 25
    }
}

function totalAPagar(vehiculo, ltconsumidos) {
    if(vehiculo == "Coche") {
        return precio = 86 + calcLt(ltconsumidos)
    } else if (vehiculo == "Moto") {
        return precio = 70 + calcLt(ltconsumidos)
    } else if (vehiculo == "Autobus") {
        return precio = 55 + calcLt(ltconsumidos)
    }
} 

console.log(totalAPagar("Coche", 24)) // 86 + 50 = 136
console.log(totalAPagar("Moto", 18)) // 70 + 50 = 120
console.log(totalAPagar("Autobus", 30)) // 55 + 25 = 80

// Carlos Guarin
// Genaro Romero
// Juliana Pulido 
// Natalia Muñoz
// Sabina Martinez
// William Moreno 