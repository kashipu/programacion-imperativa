function anterior(num) {
    return num - 1
}

function triple(num) {
    return num * 3
}

function anteriorDelTriple(num) {
    let state = num
    triple(state)
    anterior(state)

    return console.log(state)

}


// Arrow functions 

// forma clásica
function sumar(a, b) {
    return a + b;
}
console.log(sumar(2, 4)); // 6

// ES6 arrow function
let sumarArrow = (a, b) => a + b;

console.log(sumarArrow(2, 5)); // 6