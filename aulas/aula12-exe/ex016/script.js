function carregar() {
    var msg = document.getElementById('msg');
    var img = document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();
    var minuto = data.getMinutes();

    msg.innerHTML = `Agora são ${hora}:${minuto}`;
    if (minuto < 10) {
        msg.innerHTML =`Agora são <strong>${hora}:0${minuto}</strong>`
    }

    if (hora >= 0 && hora < 12) {
        img.src = ('manhã.png');
        document.body.style.background = '#e2cd9f';
    } else if (hora >= 12 && hora <= 18) {
        img.src = ('tarde.png');
        document.body.style.background = '#b9846f';
    } else {
        img.src = ('noite.png');
        document.body.style.background = '#515154';
    }
   } 
