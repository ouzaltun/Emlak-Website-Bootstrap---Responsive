let navbar = document.querySelector(".navbar");

window.onscroll = function () {
    if (document.documentElement.scrollTop > 20) {
        navbar.classList.add('sticky');
    }
    else {
        navbar.classList.remove('sticky');
    }
}