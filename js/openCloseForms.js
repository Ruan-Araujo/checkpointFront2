// abrir e fechar formulário de adicionar card
export function openForm(){
    /* Pegando os elementos do html e adicionando evento*/
    document.getElementById('btn-open-form').addEventListener("click", () => {
        document.getElementById('form-modal').style.display = "flex";
        /* Ao clicar, muda o display para flex fazendo o modal abrir  */
    });
};

export function closeForm(){
    /* Pegando os elementos do html e adicionando evento*/
    document.getElementById('btn-close-form').addEventListener("click", (e) => {
        e.preventDefault(); /* Previnindo o carregamento */
        document.getElementById('form-modal').style.display = "none";
        /* Alterando o display para none e sumindo o modal */
    });
};


// abrir e fechar login 


export let openLogin = () => {
    /* Pegando elemento do html */
    const modal = document.getElementById('login-modal-container')
    /* Adiconando a classe mostrar, para fazer o modal-login abrir */
    modal.classList.add('mostrar')
};

export let closeLogin = () => {
    /* Pegando elemento do html */
    const modal = document.getElementById('login-modal-container');
    /* Retirando a classe mostrar, para fazer o modal-login desaparecer */
    modal.classList.remove('mostrar')
};