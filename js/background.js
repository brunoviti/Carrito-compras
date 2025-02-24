document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    let colors = ['#00ff00']; // Change to green
    let currentIndex = 0;

    function changeBackground() {
        body.style.backgroundColor = colors[currentIndex];
        currentIndex = (currentIndex + 1) % colors.length;
    }

    setInterval(changeBackground, 5000); // Change background every 5 seconds
});
