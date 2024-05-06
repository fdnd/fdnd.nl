let radiiVal = 0.5;
let maxRadius = window.innerWidth > 750 ? 1.5 : 1;

window.requestAnimationFrame(animateRadiiIn)

function lerp (start, end, amt) {
    return (1-amt)*start+amt*end
}

function animateRadiiIn () {
    radiiVal = radiiVal + lerp(0, maxRadius - 0.5, 0.02)
    if (radiiVal < maxRadius) {
        document.body.style.setProperty('--radius', `${radiiVal}rem`);
    } else {
        return;
    }
    window.requestAnimationFrame(animateRadiiIn)
}