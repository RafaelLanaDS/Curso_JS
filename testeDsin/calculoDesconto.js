function calcularDesconto(descricao, quantidade, precoPorUnidade) {
    const total = quantidade * precoPorUnidade
    
    var percentualdeDesconto
    if(quantidade <= 5){
        percentualdeDesconto = 0.0555
    }else if(quantidade > 5 && quantidade <= 10){
        percentualdeDesconto =0.08
    }else if(quantidade > 10){
        percentualdeDesconto = 0.125
    }

    const desconto = total * percentualdeDesconto
    const totalapagar = total - desconto

    console.log(`O produto: ${descricao} com o valor tatal de ${total} Teve um desconto ${desconto} e o valor a pagar é ${totalapagar}`)
}

calcularDesconto("Camiseta", 3, 50)
calcularDesconto("Tênis", 7, 200)
calcularDesconto("Calça", 15, 100)