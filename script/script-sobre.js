const animacao = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

// intro
ScrollReveal().reveal(".texto1 h1", {
    ...animacao,
    origin: "top",
    delay: 500,
});

ScrollReveal().reveal(".texto1 p", {
    ...animacao,
    origin: "top",
    delay: 1000,
});

// historia

ScrollReveal().reveal(".historia-text", {
    ...animacao,
    origin: "right",
    delay: 400,
});

ScrollReveal().reveal(".historia img", {
    ...animacao,
    origin: "right",
    delay: 800,
});

// fundadores

ScrollReveal().reveal(".fundadores img.esquerda", {
    ...animacao,
    origin: "left",
    delay: 1600,
});

ScrollReveal().reveal(".fundadores h2", {
    ...animacao,
    origin: "bottom",
    delay: 800,
});

ScrollReveal().reveal(".fundadores p", {
    ...animacao,
    origin: "bottom",
    delay: 1000,
});

ScrollReveal().reveal(".fundadores img.direita", {
    ...animacao,
    origin: "right",
    delay: 1600,
});

// missão

ScrollReveal().reveal(".missao-text", {
    ...animacao,
    origin: "right",
    delay: 800,
});

ScrollReveal().reveal(".missao img", {
    ...animacao,
    origin: "right",
    delay: 400,
});

ScrollReveal().reveal(".estrutura-servicos h2", {
    ...animacao,
    origin: "bottom",
    delay: 500,
});

ScrollReveal().reveal(".estrutura-servicos p", {
    ...animacao,
    origin: "bottom",
    delay: 1000,
});