const puedeSubir = (altura, solo) => {
    if(altura >= 1.40 && altura<2.00) {
        return true;
    } else {
        if(altura<= 1.40 && altura>= 1.20 )
        return false;
    }
}

console.log(puedeSubir(1.50))