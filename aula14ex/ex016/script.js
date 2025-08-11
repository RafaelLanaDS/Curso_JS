function Contar() {
    let inicio = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')
    
    if (inicio.value.length == 0  || fim.value.length == 0  || passo.value.length == 0) {
        window.alert("ERRO")
       
    }else {
        res.innerHTML = 'Contando: '
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        
        for(let c = i; c <= f; c += p){
            res.innerHTML += `${c} `
        }
    }
      
}