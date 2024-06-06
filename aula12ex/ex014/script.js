function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >= 0 && hora < 12) {
        //BOM DIA
        img.src = 'manha.jpg'
        window.document.body.style.background = 'rgb(201, 201, 42)'
    } else if(hora >= 12 && hora < 18) {
        //BOA TARDE
        img.src = 'tarde.jpg'
        window.document.body.style.background = 'rgba(131, 74, 37, 0.685)'
    } else {
        //BOA NOITE
        img.src = 'noite.jpg'
        window.document.body.style.background = 'rgba(53, 53, 70, 0.856)'
    }
}
