

/**********************CONFIG MENU BURGUER**********************/
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

// Evento para recolher o menu burguer quando clicar na opção escolhida

navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
})


/****************************************************************************************/
const bookingType = document.getElementById("booking-type");

bookingType.addEventListener("click", (e) => {
    Array.from(bookingType.getElementsByTagName("div")).forEach((item) =>{
        item.classList.remove("active");
    });
    e.target.classList.add("active");
});

const swiper = new Swiper(".swiper", {
    slidesPerView: "auto",
    spaceBetween: 25,
});

const ScrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

// Header container

ScrollReveal().reveal(".header__container h1", {
    ...ScrollRevealOption,
});

ScrollReveal().reveal(".header__container p", {
    ...ScrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".header__container .booking", {
    ...ScrollRevealOption,
    delay: 1000,
});

ScrollReveal().reveal(".service__card", {
    duration: 1000,
    interval: 500,
});

ScrollReveal().reveal(".offer__card", {
    ...ScrollRevealOption,
    interval: 500,
});

