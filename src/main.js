(async () => {
  // Abrindo o arquivo JSON
  const response = await fetch('../instagram.json');
  const data = await response.json();

  const container = document.querySelector('.container');

  // Formatando os dados para enviar para o HTML
  const htmlList = data
    .map(({ src }) => `<li><img src="${src}" /></li>`)
    .join('');
  container.innerHTML = htmlList;
})();