// Exercício 6 — Soma de array
// Crie uma função que receba um array de números e retorne a soma de todos.

function somaArray(numeros) {
    let soma = 0;
    for (let i = 0; i < numeros.length; i++) {
        soma += numeros[i];
    }
    return soma;
}