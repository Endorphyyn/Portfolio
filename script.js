console.log("JavaScript is ready to run");
const zoomImage = document.querySelector('.main_bloc_container');

zoomImage.addEventListener('mousemove', (e) => {
    const { offsetX, offsetY, target } = e;
    const { clientWidth, clientHeight } = target;

    const xPos = (offsetX / clientWidth) * 100;
    const yPos = (offsetY / clientHeight) * 100;

    target.style.transformOrigin = `${xPos}% ${yPos}%`;
});
document.getElementById('menu-button').addEventListener('click', function() {
    var nav = document.querySelector('.nav');
    if (nav.style.display === 'block') {
        nav.style.display = 'none';
    } else {
        nav.style.display = 'block';
    }
});
