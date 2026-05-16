// Exercício 4 — FizzBuzz (clássico de entrevista!)
// Para números de 1 a 20, imprima:
// - "Fizz" se o número for divisível por 3
// - "Buzz" se o número for divisível por 5
// - "FizzBuzz" se o número for divisível por ambos
// - O próprio número caso contrário

for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}