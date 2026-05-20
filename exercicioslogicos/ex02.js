// Exercício 2:
// Um trabalhador recebe R$12,50 por hora, trabalha 6 horas por dia e trabalhou 25 dias no mês. Considere um desconto de 11% sobre o salário bruto. Calcule o salário líquido.

function salarioBruto(valorDaHora, horasPorDia, diasDoMes){
    const salarioBruto = valorDaHora * horasPorDia * diasDoMes
    
    const desconto = salarioBruto * 0.11

    const salarioLiquido =  salarioBruto - desconto 

    return salarioLiquido
}

const salarioLiquido = salarioBruto(12.50, 6, 25)

console.log(`valor do salario liquido é ${salarioLiquido}`)

console.log(salarioBruto(12.50, 6, 25))