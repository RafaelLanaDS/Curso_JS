// Exercício 3:
// Calcule o salário líquido de 3 funcionários diferentes com horas, preços e dias variados, exibindo o resultado de cada um. Considere um desconto de 25% para todos.

function salario(horas, valorDaHora, diasTrabalhados) {
    const salarioBruto = horas * valorDaHora * diasTrabalhados
    const desconto = salarioBruto * 0.25
    const salarioLiquido = salarioBruto - desconto

    return { salarioLiquido, desconto } // retorna os dois juntos
}

const funcionario1 = salario(8, 10, 30)
const funcionario2 = salario(6, 20, 15)
const funcionario3 = salario(12, 37.90, 20)

console.log(`Funcionario 1 — Líquido: R$${funcionario1.salarioLiquido} | Desconto: R$${funcionario1.desconto}`)
console.log(`Funcionario 2 — Líquido: R$${funcionario2.salarioLiquido} | Desconto: R$${funcionario2.desconto}`)
console.log(`Funcionario 3 — Líquido: R$${funcionario3.salarioLiquido} | Desconto: R$${funcionario3.desconto}`)