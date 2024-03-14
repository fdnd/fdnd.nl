const menuTrigger = document.querySelector('.js-trigger')
if (menuTrigger) {
  const header = document.querySelector('header')
  const headerLinks = [...header.querySelectorAll('a')]
  menuTrigger.addEventListener('click', () => {
    header.classList.toggle('is-active')
  })
  if (headerLinks) {
    headerLinks.forEach(link => {
      link.addEventListener('click', () => {
        header.classList.remove('is-active')
      })
    })
  }
}

let radiiVal = 0.5;
let maxRadius = window.innerWidth > 750 ? 1.5 : 1;

// 🤡
const lerp = (start, end, amt) => {
  return (1-amt)*start+amt*end
}

const animateRadiiIn = () => {
  radiiVal = radiiVal + lerp(0, maxRadius - 0.5, 0.02)
  if (radiiVal < maxRadius) {
    document.querySelector('body').style.setProperty('--radius', `${radiiVal}rem`);

  } else {
    return;
  }
  window.requestAnimationFrame(animateRadiiIn)
}

window.requestAnimationFrame(animateRadiiIn)