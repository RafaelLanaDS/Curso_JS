// Exercício 1:
// Calcule o salário líquido de um funcionário que trabalha 8 horas por dia, recebe R$20 por hora e trabalhou 20 dias. Considere um desconto de 15% sobre o salário bruto.

function salario(horasPorDia, precoPorHora, diasTrabalhados){
    const salarioLiquido = horasPorDia * precoPorHora * diasTrabalhados
    const desconto = salarioLiquido * 0.15
    const salarioBruto = salarioLiquido - desconto
    return salarioBruto
}

const funcionário1 = salario(8, 20, 20)
console.log(`o salario liquido é ${funcionário1}`)