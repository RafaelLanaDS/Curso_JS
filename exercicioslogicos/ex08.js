// Exercício 2:
// Um restaurante vende marmitas. Receba a quantidade e o preço unitário. Regras:

// 1 marmita → sem desconto
// 2 a 4 marmitas → 10% de desconto
// 5 ou mais → 20% de desconto

// Exiba o total a pagar.

function pedido(quantidade, preco){
    const totalPedido = quantidade * preco

    var descontoAplicado
    if(quantidade <= 1){
        descontoAplicado = 0.0
    }else if(quantidade <= 4){
        descontoAplicado = 0.10
    }else if (quantidade >= 5){
        descontoAplicado = 0.20
    }

    const desconto = totalPedido * descontoAplicado // const desconto = totalPedido * 0.10 
    const totalApagar = totalPedido - desconto

    console.log(`A quantidade de marmitas foram ${quantidade} e o valor a ser pago é ${totalApagar.toFixed(2)}`)
}

pedido(1, 20)
pedido(3, 20)
pedido(6, 20)