function calcular() {
    var txtn = document.getElementById('txtnum');
    var tab = document.getElementById('seltab');

    if (txtn.value.length == 0) {       
        alert('Por favor, digite um número!');
    } else {
        var num = Number(txtn.value);

        tab.innerHTML = '';
        for (c = 1; c <= 10; c++) {
            var item = document.createElement('option');
            item.text = `${num} x ${c} = ${num * c}`;
            item.value = `tab${c}`
            tab.appendChild(item);
        }
    }
}