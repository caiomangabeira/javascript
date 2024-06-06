function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if(idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'bebehomem.jpg')
            } else if(idade < 30) {
                //jovem
                img.setAttribute('src', 'jovemhomem.jpg')
            } else if(idade < 60) {
                //adulto
                img.setAttribute('src', 'adultohomem.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'idosohomem.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if(idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'bebemulher.jpg')
            } else if(idade < 30) {
                //jovem
                img.setAttribute('src', 'jovemmulher.jpg')
            } else if(idade < 60) {
                //adulto
                img.setAttribute('src', 'adultamulher.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'idosamulher.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}