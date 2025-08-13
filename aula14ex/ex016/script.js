function Contar() {
    //Pegando elementos de entrada (inputs) e a area inde séra mostrado o resultado
    var ini = document.getElementById('txti') //Campo do numero inicial
    var fim = document.getElementById('txtf')// campo do numero final
    var passo = document.getElementById('txtp')//campo do passo
    var res = document.getElementById('res')//div onde o resultado sera exibido

    // Verificando se algum dos campos está vazio
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('ERRO') // Se alguns dos compos estiver vazio. mostra um alerta
    }else {
        // se todos os campos estão preenchidos começa a contagem
        res.innerHTML = 'Contando: '
        // converte os valores digitados (que são strings) para numeros
        var i = Number(ini.value) // valor inicial
        var f = Number(fim.value) // valor final
        var p = Number(passo.value) // passo da contagem

        // Caso 1: Contagem crescente (valor inicial é menor que o final)
        if (i < f){
            for(var c = i; c <= f; c += p){ // começa do i, vai até f, pulando de p em p
            res.innerHTML += `${c} ` // adiciona o numero atual no resultado
            }
        }else {
            // Caso 2: contagem regresiva (valor inicial é maior que o final)
            for(var c = i; c >= f; c -= p){ // começa do i, vai ate f, diminuindo de p em p
                res.innerHTML += `${c} ` //adiciona o numero atual no resultado
            }
        }
        
    }
    //Pegue o que já está dentro de res e adicione o valor da variável c seguido de um espaço."
}