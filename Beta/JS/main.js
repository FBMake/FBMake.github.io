const buttonMenu = document.querySelector('.buttonMenu');
const menu = document.querySelector('.menu');
let menuIsDown = false;

buttonMenu.addEventListener("click", () => {
    if(!menuIsDown){
        menu.classList.add('down');
        buttonMenu.classList.add('rotateButton');
        menuIsDown = true;
    }else{
        menu.classList.remove('down');
        buttonMenu.classList.remove('rotateButton');
        menuIsDown = false
    }
    
}) 