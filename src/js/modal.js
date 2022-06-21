window.addEventListener("load", ()=>{
    const btn_cadastro = document.getElementById("btn-cadastro");
    const btn_login = document.getElementById("btn-login");
    const modal_cadastro = document.getElementById("modal-cadastro");
    const modal_login = document.getElementById("modal-login");
    const fechar_modal = document.querySelectorAll(".fechar-modal");
    const darkscreen = document.querySelectorAll(".darkscreen");
    const user_voluntario = document.querySelector("#user_voluntario");
    const user_instituicao = document.querySelector("#user_instituicao");
    const btn_voluntario = document.querySelector("#btn_voluntario");
    const btn_instituicao = document.querySelector("#btn_instituicao");
    const submit_button = document.querySelector("#submit_button");
    const back_button = document.querySelector("#back_button");
    const progress = document.querySelector("#progress");

    const cadastro_1 = document.querySelector("#cadastro_1");
    const cadastro_2 = document.querySelector("#cadastro_2");
    const cadastro_3 = document.querySelector("#cadastro_3");
    
    let modal_page = 1;

    btn_cadastro.addEventListener("click", ()=>{
        modal_cadastro.style.visibility = "visible";
        modal_cadastro.style.opacity = 1;
    })

    btn_login.addEventListener("click", ()=>{
        modal_login.style.visibility = "visible";
        modal_login.style.opacity = 1;
    })

    for(let i=0;i<fechar_modal.length;i++){
        fechar_modal[i].addEventListener("click", ()=>{
            darkscreen[i].style.visibility = "hidden";
            darkscreen[i].style.opacity = 0;
        })
    }

    user_voluntario.addEventListener("click", ()=>{
        clearInput();
        btn_voluntario.classList.add("active");
    })

    user_instituicao.addEventListener("click", ()=>{
        clearInput();
        btn_instituicao.classList.add("active");
    })

    function clearInput(){
        btn_voluntario.classList.remove("active");
        btn_instituicao.classList.remove("active");
    }

    submit_button.addEventListener("click", ()=>{
        if(modal_page==1){
            cadastro_1.style.display = "none";
            cadastro_2.style.display = "block";
            back_button.style.visibility = "visible";
            progress.innerText = "2 de 3";
            modal_page=2;
        } else if(modal_page==2){
            cadastro_2.style.display = "none";
            cadastro_3.style.display = "block";
            back_button.style.visibility = "visible";
            progress.innerText = "3 de 3";
            modal_page=3;
        }
        progress_bar();
    })

    back_button.addEventListener("click", ()=>{
        if(modal_page==3){
            cadastro_3.style.display = "none";
            cadastro_2.style.display = "block";
            back_button.style.visibility = "visible";
            progress.innerText = "2 de 3";
            modal_page=2;
        } else if(modal_page==2){
            cadastro_2.style.display = "none";
            cadastro_1.style.display = "block";
            back_button.style.visibility = "hidden";
            progress.innerText = "1 de 3";
            modal_page=1;
        }
        progress_bar();
    })

    function progress_bar(){
        const bar_1 = document.querySelector("#bar_1");
        const bar_2 = document.querySelector("#bar_2");
        const bar_3 = document.querySelector("#bar_3");

        if(modal_page==1){
            bar_1.classList.add("active")
            bar_2.classList.remove("active")
            bar_3.classList.remove("active")
        } else if(modal_page==2){
            bar_1.classList.add("active")
            bar_2.classList.add("active")
            bar_3.classList.remove("active")
        } else if(modal_page==3){
            bar_1.classList.add("active")
            bar_2.classList.add("active")
            bar_3.classList.add("active")
        }
    }

})