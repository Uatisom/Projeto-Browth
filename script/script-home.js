// Seleciona todos os botões de filtro
const filterButtons = document.querySelectorAll('.opcao');
const produtos = document.querySelectorAll('.produtos');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');

        produtos.forEach(produto => {
            // Exibe todos os produtos se o filtro for "all"
            if (filter === 'all') {
                produto.style.display = 'flex';
            } else {
                // Exibe apenas os produtos que correspondem ao filtro
                produto.style.display = produto.classList.contains(filter) ? 'flex' : 'none';
            }
        });
    });
});

// parte de pesquisa

const searchInput = document.getElementById('pesquisa');
const mercadorias = document.getElementById('mercadorias');


searchInput.addEventListener('input', () => {
  const searchTerm = searchInput.value.toLowerCase();
  console.log(searchTerm);

  produtos.forEach(product => {
    const produtoNome = product.querySelector('h3').textContent.toLowerCase();


    if (searchTerm === '') {
      product.style.display = 'flex'; // Se tiver vazio mostra tudo

    }

    if (produtoNome.includes(searchTerm)) {
      product.style.display = 'flex'; // Mostra oq bate com a pesquisa
    } else {
      product.style.display = 'none'; // Esconde oq não bate com a pesquisa
      
    }
  });
});