const toggleSwitch = document.getElementById('toggleSwitch');
const logo = document.getElementById('logo');
const burger = document.getElementById('burger');
const nav = document.getElementById('nav');

toggleSwitch.addEventListener('click', () => {
    // Alterna entre modo claro y oscuro
    toggleSwitch.classList.toggle('active');
    document.body.classList.toggle('light-mode');

    // Cambia la imagen del logo según el modo
    if (document.body.classList.contains('light-mode')) {
        logo.src = 'img/alarado-icon-homepage-dark.svg'; // Logo para modo claro
    } else {
        logo.src = 'img/alarado-icon-homepage.svg'; // Logo para modo oscuro
    }
});

// Función para alternar el menú hamburguesa

burger.addEventListener('click', () => {
    // Alterna la clase "active" del menú
    nav.classList.toggle('active'); 
    
    // Cambia el ícono según el estado del menú
    if (nav.classList.contains('active')) {
        burger.innerHTML = '<i class="fa-solid fa-xmark"></i>'; // Ícono de cerrar
    } else {
        burger.innerHTML = '<i class="fa-solid fa-bars"></i>'; // Ícono de abrir
    }
});