const homeImageOptions = {
    duration: 800,
    easing: 'ease',
    scale: 0.8,
    origin: 'bottom',
    distance: '100px'
}

const textHomeOptions = {
    duration:1000,
    easing: 'ease',
    origin: 'left',
    opacity: 0,
    distance: '500px',
    delay: 400
}

ScrollReveal().reveal('.title-right__image', homeImageOptions);
ScrollReveal().reveal('.home-title__title-left', textHomeOptions);