document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    let colors = ['#ff9999', '#66b3ff', '#99ff99', '#ffcc99'];
    let currentIndex = 0;

    function changeBackground() {
        body.style.backgroundColor = colors[currentIndex];
        currentIndex = (currentIndex + 1) % colors.length;
    }

    setInterval(changeBackground, 5000); // Change background every 5 seconds
});
