var idade = 67
console.log(`Voce tem ${idade} anos`)
if (idade < 18){
    console.log('Não vota !')
} else if  (idade < 18 || idade > 65) {
    console.log('Voto opcional')
} else{
    console.log('Voto obrigatorio')
}
