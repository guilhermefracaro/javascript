// Função: Cria um novo parágrafo e o insere no fim do arquivo HTML

function criarParagrafo() {
    var para = document.createElement('p');
    para.textContent = 'Você clicou no botão!';
    document.body.appendChild(para);
  }

  /*
  1. Captura referência de todos os botões na página e armazena isso em um array
  2. Vai até todos os botões e aciona um event listener click a cada um deles

  Quando cada botão é clicado, a função criarParagrafo() será executada
  */

  var botoes = document.querySelectorAll('button');

  for(var i = 0; i < botoes.length ; i++) {
    botoes[i].addEventListener('click', criarParagrafo);
  }