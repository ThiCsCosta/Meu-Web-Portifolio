// Scroll Top button
window.addEventListener('scroll', () =>{
    let scroll = document.querySelector('.scrollTop')
        scroll.classList.toggle('actived', window.scrollY > 450)
});
function backTop(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
};

