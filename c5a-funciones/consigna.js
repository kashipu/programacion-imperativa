const prompt = require("prompt-sync")({ sigint: true });

// Pulgadas a centimetros
let inchToCm = (inch) => console.log(inch * 2.54, "cm")
inchToCm(prompt("Pulgadas: "))

// Palabras a url
let textToUrl = (text) => console.log("http://www." + text + ".com")
textToUrl(prompt("Escriba su texto: "))

// Tu edad en años de perro
let ageToAgeDog = (age) => {
    // Calc age to age dog
    let ageDog = age * 7
    console.log("Tienes " + ageDog + " en años de perro")
}
ageToAgeDog(prompt("Tu edad: "))

// Frase con signo de admiración
let phraseWithSymbol = (phrase) => console.log(phrase + "!")
phraseWithSymbol(prompt("Escriba la frase: "))

// Valor de la hora con el sueldo 
let valueWorkHour = (salary) => {
    let calc = (salary / 30) / 8 
    console.log( " Tu hora de trabajo vale:" + parseInt(calc))
}
valueWorkHour(prompt("Salario: "))

// Calcular IMC 
let calcIMC = (weight, height) => {
    weight = prompt("Ingrese su peso ")
    height = prompt("Ingrese su altura en metros ej: '1.75' ")
    let imc = weight / Math.pow(height, 2)
    return console.log(imc) 
}

calcIMC()
