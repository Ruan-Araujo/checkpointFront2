// abrir e fechar formulário de adicionar card
export function openForm(){
    document.getElementById('btn-open-form').addEventListener("click", () => {
        document.getElementById('form-modal').style.display = "flex";
    });
};

export function closeForm(){
    document.getElementById('btn-close-form').addEventListener("click", (e) => {
        e.preventDefault();
        document.getElementById('form-modal').style.display = "none";
    });
};


// abrir e fechar login 

const btnLogin = document.getElementById('login-btn')
export let openLogin = () => {
    const modal = document.getElementById('login-modal-container')
    modal.classList.add('mostrar')
};

const fechar = document.getElementById('fechar');
export let closeLogin = () => {
    const modal = document.getElementById('login-modal-container');
    modal.classList.remove('mostrar')
};