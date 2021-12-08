const bar = document.querySelector('.bar');
const nav = document.querySelector('nav');
const navbar = document.querySelector('.navbar');

function toggle(){
    bar.addEventListener('click',()=>{
        console.log("I am clicked")
        // nav.classList.toggle("visible")
        navbar.classList.toggle('navbar-show');
        
    })
}

toggle();
