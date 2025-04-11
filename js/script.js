// Seleciona o elemento do menu hambúrguer
const menuHamburguer = document.querySelector('.menu-hamburguer')

// Adiciona um evento de clique ao menu hambúrguer
menuHamburguer.addEventListener('click', () => {
    toggleMenu(); // Chama a função que alterna a exibição do menu
});

// Função que alterna o estado do menu (mostrar ou esconder)
function toggleMenu() {
    const nav = document.querySelector('.nav-responsive') // Seleciona o menu de navegação responsivo

    // Alterna a classe 'change' no menu hambúrguer (ativa/desativa a animação para "X")
    menuHamburguer.classList.toggle('change');

    // Se a classe 'change' estiver presente, exibe o menu
    if(menuHamburguer.classList.contains('change')) {
        nav.style.display = 'block';
    } else {
        // Caso contrário, esconde o menu
        nav.style.display = 'none'; 
    }
}
