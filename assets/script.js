/*
  *** VIDEO ***
  Er staat een video naast de foto's
  In de tekst ernaast staat een tekst-link die de video laat spelen.
  Hier staan de functies die de video latens pelen of pauzeren

  Online croppen,trimmen,exporteren https://online-video-cutter.com
  MOV to MP4 https://www.onlineconverter.com/mov-to-mp4
*/
const videolink = document.querySelector('#hackathon');
const video = document.querySelector('video');

videolink.addEventListener('click', () => {
  if (video.paused) {
    video.play();
    this.textContent = 'Pauzeer de video van een Frontend Hackaton.';
  } else {
    video.pause();
    this.textContent = 'Speel de video van een Frontend Hackaton.';
  }
  video.onended = event => {
    this.textContent =
      'Bekijk de video van een Frontend Hackaton nog een keer.';
  };
});

/*
  *** INTERSECTION OBSERVER ***
  Als de header uit beeld is, wordt de nav getoond

  MDN https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
  https://alligator.io/js/intersection-observer
*/

const navigatie = document.querySelector('nav');
const header = document.querySelector('header');

observer = new IntersectionObserver((entry, observer) => {
  if (entry[0].isIntersecting) {
    navigatie.classList.remove('show');
  } else {
    navigatie.classList.add('show');
  }
});
observer.observe(header);
