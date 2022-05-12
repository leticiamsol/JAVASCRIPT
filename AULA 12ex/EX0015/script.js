function verificar() { 
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('ERRO, Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) {
                // criança
                img.setAttribute('src', 'foto-menino.jpg')
            } else if (idade < 21) {
                // jovem
                img.setAttribute('src', 'foto-rapaz.jpg')
            } else if (idade < 50) {
                // adulto
                img.setAttribute('src', 'foto-homem.jpg')
            } else {
                // idoso
                img.setAttribute('src', 'foto-idoso.jpg')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // criança
                img.setAttribute('src', 'foto-menina.jpg')
            } else if (idade < 21) {
                // jovem
                img.setAttribute('src', 'foto-moça.jpg')
            } else if (idade < 50) {
                // adulta
                img.setAttribute('src', 'foto-mulher.png')
            } else {
                // idosa
                img.setAttribute('src', 'foto-idosa.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }

}