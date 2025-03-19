function verificar() {
    var data = new Date()
    var ano = data.getFullYear() //pega os 4 digitos do ano atual
    var fAno = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fAno.value.length == 0 || Number(fAno.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        /*res.innerHTML = `Idade calculada: ${idade}`*/
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 4) {
                // Bebe
                img.setAttribute('src', 'images/00-bebe-menino-250.jpg')
            } else if (idade < 9) {
                // Menino
                img.setAttribute('src', 'images/01-menino-250.jpg')
            } else if (idade < 13) {
                // Rapaz
                img.setAttribute('src', 'images/02-rapaz-250.jpg')
            } else if (idade < 21) {
                // Adolecente
                img.setAttribute('src', 'images/03-homem-adolecente-250.jpg')
            } else if (idade < 40) {
                // Homem Jovem
                img.setAttribute('src', 'images/04-homem-jovem-250.jpg')
            } else if (idade < 60) {
                // Adulto
                img.setAttribute('src', 'images/05-homem-adulto-250.jpg')
            } else {
                // Idoso
                img.setAttribute('src', 'images/06-idoso-250.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 4) {
                // Bebe
                img.setAttribute('src', 'images/00-bebe-menina-250.png')
            } else if (idade < 9) {
                // Menina
                img.setAttribute('src', 'images/01-menina-250.jpg')
            } else if (idade < 13) {
                // Moça
                img.setAttribute('src', 'images/02-mocinha-250.jpg')
            } else if (idade < 21) {
                // Adolecente
                img.setAttribute('src','images/03-mulher-adolecente-250.jpg')
            } else if (idade < 40) {
                // Mulher Jovem
                img.setAttribute('src', 'images/04-mulher-jovem-250.jpg')
            } else if (idade < 60) {
                // Adulta
                img.setAttribute('src', 'images/05-mulher-adulta-250.jpg')
            } else {
                // Idosa
                img.setAttribute('src', 'images/06-idosa-250.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}