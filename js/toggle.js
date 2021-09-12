/* Função para fazer o darkmode */
export function darkMode() {
    /* Selecionando a query toggle */
    let toggle = document.querySelector('label[for="toggle"]');
    /* Girando ele em 720 graus */
    toggle.style.transform = 'rotate(720deg)';
    /* Adicionando um sol para indicar onde voltar para o modo claro */
    toggle.innerText = '☼';

    /* Modificando a estilização do html */
    document.documentElement.setAttribute('style', 
        `--background-color: var(--primary-color);
        --tertiary-color: #e45858;`);

    document.querySelector('label').style.color = '#ccc';
    document.querySelector('span').style.color = '#ffffff50';
    /* Muda a cor de cada ícone do menu */
    document.querySelectorAll('.nav-icons').forEach(function(item) {
        item.style.filter = 'invert(25%) sepia(76%) saturate(415%) hue-rotate(44deg) brightness(102%) contrast(96%)';
    });
    document.querySelectorAll('h1').forEach(function(item) {
        item.style.color = '#ccc';
    });
    document.querySelectorAll('p').forEach(function(item) {
        item.style.color = '#ccc';
    });
};
/* Função modo claro */
export function lightMode() {
    let toggle = document.querySelector('label[for="toggle"]');
    toggle.style.transform = '';
    toggle.innerHTML = '&#9790;';

    document.documentElement.setAttribute('style', '');

    document.querySelector('label').style.color = '';
    document.querySelector('span').style.color = '';

    document.querySelectorAll('.nav-icons').forEach(function(item) {
        item.style.filter = '';
    });
    document.querySelectorAll('h1').forEach(function(item) {
        item.style.color = '';
    });
    document.querySelectorAll('p').forEach(function(item) {
        item.style.color = '';
    });
};

let toggle = document.querySelector('#toggle');
/* Evento para identificar quando aperta para mudar de claro para escuro */
toggle.addEventListener('change', function() {
    if (toggle.checked) {
        darkMode();
    } else {
        lightMode();
    };
});
