function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fAno.value.lenght == 0 || fAno.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', '01-mas.png')
            } else if (idade < 22) {
                // Jovem
                img.setAttribute('src', '02-mas.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', '03-mas.png')
            } else {
                // Idoso
                img.setAttribute('src', '04-mas.png')
            }

        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', '01-fem.png')
            } else if (idade < 22) {
                // Jovem
                img.setAttribute('src', '02-fem.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', '03-fem.png')
            } else {
                // Idoso
                img.setAttribute('src', '04-fem.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
        res.appendChild(img)
    }
}