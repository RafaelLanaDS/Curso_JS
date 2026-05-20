// Exercício 2:
// Receba 3 valores X, Y e Z. Se X for maior que Y e Z, e a soma de Y e Z for maior que X, e X for positivo, imprimir "Válido". Caso contrário imprimir "Inválido".

function Valores(x,y,z){

    if(x > y && x > z && (y + z) > x && x > 0){
        return 'Valido'
    }else{
        return 'Invalido'
    }
}

console.log(Valores(10, 5, 6))
console.log(Valores(7,3,2))

// x > 0 → verifica se é positivo
// x % 2 === 0 → verifica se é par