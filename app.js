function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.getElementById('res')
    if(fAno.value == 0 || Number(fAno.value) > ano) {
        alert('Erro! Verifica os dados e tente novamente')
    } else{
        var fsex = document.getElementsByName('radesx')
        var idade = ano - Number(fAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
           genero ='Homem' 
           if (idade >= 0 && idade < 10) {
            //criana
            img.setAttribute('src', 'bebeM.jpg')
         } else if (idade < 21) {
             //jovem
             img.setAttribute('src', 'jovemM.jpg')
         } else if (idade < 51) {
             //adulto
             img.setAttribute('src', 'adultoM.jpg')
         } else {
             //idoso
             img.setAttribute('src', 'idosoM.jpg')
         }
        } else if (fsex[1].checked) {
            genero = 'Feminino'
            if (idade >= 0 && idade < 10) {
                //criana
                img.setAttribute('src', 'bebeF.jpg')
             } else if (idade < 21) {
                 //jovem
                 img.setAttribute('src', 'jovemF.jpg')
             } else if (idade < 51) {
                 //adulto
                 img.setAttribute('src', 'adultoF.jpg')
             } else {
                 //idoso
                 img.setAttribute('src', 'idosoF.jpg')
             }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
        img.style.width = '300px'
    }
}