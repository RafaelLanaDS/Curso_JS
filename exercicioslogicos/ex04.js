// Exercício 1:
// Receba dois números A e B. Se A for maior que B e A for par, imprimir "A vence". Se B for maior que A e B for ímpar, imprimir "B vence". Caso contrário imprimir "Sem vencedor".

function Numeros(a, b){

    if(a > b && a % 2 == 0){
        return 'A vence'
    }else if(b > a && b % 2 !== 0){
        return 'B vence'
    }else{
        return 'sem vencedor'
    }
}

console.log(Numeros(8, 11))