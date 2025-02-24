document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    let colors = ['#e0f7e0', '#c1efc1', '#a2e7a2', '#83df83', '#64d764', '#45cf45', '#26c726', '#07bf07']; // Tonos de verde
    let currentIndex = 0;

    function changeBackground() {
        body.style.backgroundColor = colors[currentIndex];
        currentIndex = (currentIndex + 1) % colors.length;
    }

    setInterval(changeBackground, 5000); // Cambiar fondo cada 5 segundos

    // Aplicar estilo acuarelado
    body.style.backgroundImage = 'url("path/to/watercolor-texture.png")';
    body.style.backgroundSize = 'cover';
    body.style.backgroundBlendMode = 'multiply';

    // Estilo adicional
    body.style.backgroundColor = '#001f3f'; // Fondo azul oscuro
    body.style.color = '#ffffff'; // Letras blancas
    const elements = document.querySelectorAll('.element');
    elements.forEach(element => {
        element.style.backgroundColor = '#b3e5fc'; // Elementos en tonos celeste pastel
        element.style.color = '#cccccc'; // Letras grises
    });
});
