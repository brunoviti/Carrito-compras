document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;

    // Estilo adicional
    body.style.backgroundColor = '#001f3f'; // Fondo azul oscuro
    body.style.color = '#ffffff'; // Letras blancas
    const elements = document.querySelectorAll('.element');
    elements.forEach(element => {
        element.style.backgroundColor = '#b3e5fc'; // Elementos en tonos celeste pastel
        element.style.color = '#cccccc'; // Letras grises
    });
});
