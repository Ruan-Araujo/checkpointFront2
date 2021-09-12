/* Função para contar os caracteres */
export default function inputCounter() {
    /* Pegando elementos do html */
    let counter = document.getElementById("counter");
    let counterCircle = document.querySelector('#counter-container span')

    /* Definimos para ir subtraindo 150 - o tamanho de valores inseridos em descrição */
    counter.innerText = `${150 - descricao.value.length}`;
    /* Quando faltar 10 para 150 a cor muda */
    if (descricao.value.length >= 140) {
        counter.style.color = 'var(--tertiary-color)';
        counterCircle.style.border = 'var(--tertiary-color)';
    } else {
        counter.style.color = '';
        counterCircle.style.border = 'solid 1px var(--tertiary-color);';
    }
};