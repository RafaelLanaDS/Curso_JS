function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagens')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12){
        //Bom dia
        img.src = 'imagens/fotomanha.png'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora < 18){
        //Boa tarde
        img.src = 'imagens/fototarde.png'
        document.body.style.background = '#b9846f'
    }else {
        //Boa noite
        img.src = 'imagens/fotonoite.png'
        document.body.style.background = '#515154'
    }
}


