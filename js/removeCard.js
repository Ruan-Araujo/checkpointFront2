/* Função utilizada para remover um card */
export default function removeCard() {
    /* Selecionando os elementos html */
    let removeButton = document.querySelectorAll('.remove-btn');
    let card = document.querySelectorAll('.card');
    /* Interando sobre o array de cards */
    for (let i = 0; i < card.length; i++) {
        /* Adiconando evento para identificar qual card do array queremos remover */
        removeButton[i].addEventListener('click', () => { 
            /* Estilizando a remoção desse card */
            card[i].style.opacity = 0;
            card[i].style.transform = 'rotate(-20deg) translate(-10rem, -10rem)';
            setTimeout(()=>{
                card[i].remove(); /* Elemento removido do html dinamicamente */
            }, 500); 
        });
    };
};

removeCard();