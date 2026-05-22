// Exercício 3:
// Uma farmácia aplica desconto progressivo. Receba o nome do remédio, quantidade e preço unitário. Regras:

// Até 2 unidades → sem desconto
// De 3 a 5 → 5% de desconto
// De 6 a 10 → 10% de desconto
// Acima de 10 → 18% de desconto

// Exiba nome do remédio, total sem desconto, valor do desconto e total a pagar.

function descontoProgresivo(NomeRemedio, quantidade, preco, ){

    const valorRemedio = quantidade * preco

    var desconto
    if(quantidade <= 2){// até 2
        desconto = 0.0
    }else if(quantidade <= 5){  // de 3 a 5 
        desconto = 0.05
    }else if(quantidade <= 10){ //de 6 a 10
        desconto = 0.10
    }else if(quantidade > 10){ // acima de 10
        desconto = 0.18
    }

    const totaldesconto  = valorRemedio * desconto // descobriu o valor do desconto 
    const totalApagar = valorRemedio - totaldesconto // pega o valor do desconto e retira o valor total da compra 

    console.log(`Voce comprou ${NomeRemedio} com a quantidade de ${quantidade} e o valor total apliocado é ${totalApagar.toFixed(2)}`)
}

descontoProgresivo("Paracetamol", 2, 15.60)
descontoProgresivo("Dipirona", 5, 18.99)
descontoProgresivo("Limesulida", 20, 12.87)