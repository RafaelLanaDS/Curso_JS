
function calcularSalarioLiquido(horasPorDia, precoDaHora, diasTrabalhados) {
    const salarioBruto = horasPorDia * precoDaHora * diasTrabalhados;// Calcular o salário bruto
    
    const desconto = salarioBruto * 0.21;// Calcular o desconto (21%)
    
    const salarioLiquido = salarioBruto - desconto;// Calcular o salário líquido
    
    return salarioLiquido;

}
const salarioLiquido = calcularSalarioLiquido(8, 15, 22);
console.log(`O salário líquido é: R$ ${salarioLiquido.toFixed(2)}`);