// Exercício 1:
// Uma loja de eletrônicos aplica desconto por quantidade. Receba o nome do produto, quantidade e preço unitário. Regras:

// Até 3 unidades → 3% de desconto
// De 4 a 8 unidades → 7% de desconto
// Acima de 8 → 15% de desconto

// Exiba total, desconto e total a pagar.

function desconto(nomeProduto, quantidade, precoPorUnidade){

    const total = quantidade * precoPorUnidade
    var porcentualDeDesconto 

    if(quantidade <= 3){
        porcentualDeDesconto = 0.03
    }else if(quantidade <= 8){
        porcentualDeDesconto = 0.07
    }else if(quantidade > 8){
        porcentualDeDesconto = 0.15
    }else{
        console.log("Quantidade inválida")
    }

    const desconto = total * porcentualDeDesconto
    const totalapagar = total - desconto

    console.log(`O produto: ${nomeProduto} com o valor tatal de ${total} Teve um desconto ${desconto.toFixed(2)} e o valor a pagar é ${totalapagar.toFixed(2)}`)
}

desconto("Camiseta", 3, 50)
desconto("Tênis", 0, 200)
desconto("Calça", 15, 100)