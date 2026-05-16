
function verificarValores(a, b, c, d) {
    if(b > c && d > a && (c + d) > (a + b) && c > 0 && d > 0 && a % 2 == 0) {
        return "Valores aceitos"
    } else {
        return "Valores não aceitos"
    }
}

console.log(verificarValores(2, 7, 6, 4))
//console.log(verificarValores(2, 5, 3, 4))  exemplo de valores nao aceitos