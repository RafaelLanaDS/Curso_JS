function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verificar os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
                //criaça
                img.setAttribute('src', 'bebemenino.jpg')
            } else if (idade >= 18 && idade < 21){
                //joven
                img.setAttribute('src', 'homenjovem.pnj')
            } else if (idade < 50){
                //adulto
                img.setAttribute('src', '')
            }else{
                //idoso
                img.setAttribute('src', 'velho.png')
            }
                
        }else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade < 10){
                //criaça
                img.setAttribute('src','')
            } else if (idade >= 18 && idade < 21){
                //joven
                img.setAttribute('src','mulherjoven.png')
            } else if (idade < 50){
                //adulto
                img.setAttribute('src','')
            }else{
                //idoso
                img.setAttribute('src','')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}