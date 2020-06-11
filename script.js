const navToggle = document.querySelector('.nav-toggle-label');
const navLinks = document.querySelectorAll('.nav-link');
const scrollDown = $('.scroll-down');
const scrollUp = $('.scroll-up');

navToggle.addEventListener('click', ()=>{
    document.body.classList.toggle('nav-open');
})

navLinks.forEach(link => {
    link.addEventListener('click', ()=>{
        document.body.classList.remove('nav-open');
    })
})

scrollDown.click(()=>{
    $('html, body').animate({
        scrollTop: $('#about').offset().top
    }, 200);
})

scrollUp.click( ()=>{
    $('html, body').animate({
        scrollTop : 0
    }, 200);
})

$(window).scroll(()=>{
    if($(this).scrollTop() > 50){
        scrollUp.fadeIn(500);
    } else{
        scrollUp.fadeOut(500);
    }
})