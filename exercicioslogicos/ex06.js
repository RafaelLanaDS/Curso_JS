// Exercício 3:
// Receba 4 notas de um aluno A, B, C e D. Se a média for maior ou igual a 7, todas as notas forem positivas e a maior nota for acima de 8, imprimir "Aprovado com distinção". Se a média for maior ou igual a 7 mas não cumprir as outras condições, imprimir "Aprovado". Caso contrário imprimir "Reprovado".

function Media(a, b, c, d) {

    const media = (a + b + c + d) / 4

    const maiorNota = Math.max(a, b, c, d)// Math.max() é uma função que retorna o maior valor entre os argumentos fornecidos. Neste caso, estamos passando as quatro notas (a, b, c e d) como argumentos para encontrar a maior nota entre elas.

    if (
        media >= 7 &&
        a > 0 &&
        b > 0 &&
        c > 0 &&
        d > 0 &&
        maiorNota > 8
    ) {

        return 'Aprovado com distinção'

    } else if (media >= 7) {

        return 'Aprovado'

    } else {

        return 'Reprovado'
    }
}

console.log(Media(8, 8, 10, 10)) // Aprovado com distinção

console.log(Media(7, 7, 7, 7)) // Aprovado

console.log(Media(5, 6, 4, 7)) // Reprovado