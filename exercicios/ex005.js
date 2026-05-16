// Exercício 5 — Inverter uma string
// Crie uma função que receba uma palavra e retorne ela ao contrário.
// ⚠️ Tenta resolver sem usar .reverse() direto na string — usa um loop! Isso é o que testam em entrevista.

function inverterString(palavra) {
    let palavraInvertida = "";
    for (let i = palavra.length - 1; i >= 0; i--) {
        palavraInvertida += palavra[i];
    }
    return palavraInvertida;
}