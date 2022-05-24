function calcular() {
    var txtini = document.getElementById('txtini');
    var txtfim = document.getElementById('txtfim');
    var txtpas = document.getElementById('txtpas');
    var res = document.querySelector('div#res');

    if (txtini.value.length == 0 || txtfim.value.length == 0 || txtpas.value.length == 0) {
        alert('[ERRO] Faltam dados!');
        res.innerHTML = 'Impossível contar!'
    } else {
        res.innerHTML = 'Contando...<br>'
        var ini = Number(txtini.value);
        var fim = Number(txtfim.value);
        var pas = Number(txtpas.value);

        if (pas <= 0) {
            alert('Passo inválido! Considerando passo como 1');
            pas = 1;
        }
        
        if (ini < fim) { // contagem crescente
            for (let c = ini; c <= fim; c += pas) {
                res.innerHTML += `${c} \u{27A1}	`;
            }          
        } else { // contagem decrescente
            for (let c = ini; c >= fim; c -= pas) {
                res.innerHTML += `${c} \u{27A1}	`;
            }
        }
        res.innerHTML += '\u{26A0}';
        
    }
}