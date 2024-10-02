const backToTop = document.querySelector('#backTop');
console.log(backToTop);
const mobButton = document.querySelector('.mobile');
const navList = document.querySelector('nav ul');
const modalButton = document.querySelector('#mobBtn');
const overlay = document.querySelector('.overlay');
const closeModalButton = document.querySelector('#closeBtn');


backToTop.addEventListener('click', () => {
    // scroll from top
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

})

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.querySelector("header").style.padding = "30px 10px";
        document.querySelector("header").style.backgroundColor = "blue";
        document.querySelector("header").style.color = "white";
        document.querySelector("logo").style.fontSize = "25px";

    } else {
        document.querySelector("header").style.padding = "80px 10px";
        document.querySelector("header").style.backgroundColor = "transparent";
        document.querySelector("logo").style.fontSize = "35px";

    }
}

const toggleMenu = () => {
    navList.classList.toggle('responsive');
}

const toggleModal = () => {
    overlay.classList.toggle('visible');
    console.log("button pressed");
}

mobButton.addEventListener('click', toggleMenu);
modalButton.addEventListener('click', toggleModal);
closeModalButton.addEventListener('click', toggleModal);