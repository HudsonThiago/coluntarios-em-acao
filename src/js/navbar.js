window.addEventListener("load", ()=>{
    const nav_button = document.getElementById("nav-button");
    
    nav_button.addEventListener("click", ()=>{
        const nav = document.getElementById("nav");

        nav.classList.toggle("active");
        nav_button.classList.toggle("active");
    })
    
})