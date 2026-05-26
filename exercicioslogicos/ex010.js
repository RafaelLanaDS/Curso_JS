// Exercício 1:
// Resolva a equação AX + BX + C = 1 para A=3, B=2, C=0. Caso A e B sejam 0 e C diferente de 1, imprimir "solução impossível".


function equação(a, b, c){
    // se A e B forem 0 E C diferente de 1 → "solução impossível"
    // senão → calcular X = (1 - C) / (A + B)
    if(a === 0 && b === 0 && c !== 1){
        return "Soluçao Impossivel"
    }else {
        var x = (1 - c) / (a + b)
        return `X = ${x}`
    }
}

console.log(equação(2, 3, 20))
console.log(equação(0, 0, 5)) // solução impossível