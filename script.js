// Selecionando todos os itens de link dentro do menu
const menuItems = document.querySelectorAll('#menu a');

// Adiciona eventos apenas aos links individuais
menuItems.forEach(item => {
    // Alterar a cor de fundo ao passar o mouse sobre o link
    item.addEventListener('mouseover', () => {
        item.style.backgroundColor = 'rgba(0, 255, 135, 0.2)'; // Destaque apenas no link
    });

    // Remove o fundo ao sair do link
    item.addEventListener('mouseout', () => {
        item.style.backgroundColor = ''; // Remove o destaque
    });

    // Adiciona evento de clique
    item.addEventListener('click', (event) => {
        event.preventDefault(); // Evita comportamento padrão

        // Faz o direcionamento suave para a seção correspondente
        const targetSection = document.querySelector(item.getAttribute('href'));
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});