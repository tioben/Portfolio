//Efeito de digitando
function typingEffect(element) {
    const arrayText = element.innerHTML.split('');
    element.innerHTML = '';
    arrayText.forEach((Letter, index) => {
        setTimeout(() => {
            element.innerHTML += Letter;
        }, 75 * index);
    });
}

const title = document.querySelector('.typing');
const title2 = document.querySelector('.typing2');

typingEffect(title);
typingEffect(title2);

//Menu responsivo
const menuButton = document.getElementById("navMenuButton");

function toggleMenu(){
    const nav = document.getElementById("navMenuItens");
    nav.classList.toggle('active')
}