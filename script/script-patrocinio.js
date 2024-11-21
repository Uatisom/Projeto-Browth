const animacao = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};


ScrollReveal().reveal(".intro h1", {
    ...animacao,
    origin: "top",
    delay: 500,
});

ScrollReveal().reveal(".intro h2", {
    ...animacao,
    origin: "top",
    delay: 700,
});

ScrollReveal().reveal(".container", {
    ...animacao,
    origin: "bottom",
    delay: 500,
});