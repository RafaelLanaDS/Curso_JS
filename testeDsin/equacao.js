function calcularX(a, b, c) {
    // se A e B forem 0 E C diferente de 1 → "solução impossível"
    // senão → calcular X = (1 - C) / (A + B)
    if(a === 0 && b === 0 && c !== 1){
        return "Soluçao Impossivel"
    }else {
        var x = (1 - c) / (a + b)
        return `X = ${x}`
    }
}

console.log(calcularX(2, 3, 20))
console.log(calcularX(0, 0, 5)) // solução impossível