const animationContainer = document.getElementById('TwitterBirdy')
const animation = lottie.loadAnimation({
    container: animationContainer,
    renderer: 'svg',
    loop:true,
    autoplay:false,
    path: 'src/lottie/TwitterBirdy.json'
});

function isTouchDevice() {
    return ('ontouchstart' in window || navigator.maxTouchPoints > 0);
}

if (isTouchDevice()) {
    animation.play(); // Auto-hover effect on touch devices
} else {

animationContainer.addEventListener('mouseenter', () => {
    animation.play();
});


animationContainer.addEventListener('mouseleave', () => {
    animation.stop();
});
}