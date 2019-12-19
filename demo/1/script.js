
/*
  *** VIDEO ***
  Er staat een video naast de foto's
  In de tekst ernaast staat een tekst-link die de video laat spelen.
  Hier staan de functies die de video latens pelen of pauzeren

  Online croppen,trimmen,exporteren https://online-video-cutter.com
  MOV to MP4 https://www.onlineconverter.com/mov-to-mp4
*/
var videolink = document.querySelector('#hackathon_video');
// console.log("videolink", videolink);
var video = document.querySelector('video');
// console.log("video", video);

videolink.addEventListener("click",function(){
    // pix.classList.add('hide');
    // video.classList.remove('hide');
    if(video.paused){
      video.play();
      this.textContent="Klik nog een keer om de video te pauzeren.";
    }else{
      video.pause();
      this.textContent="Bekijk de video van een Frontend Hackathon.";
    }
    video.onended = (event) => {
      this.textContent="Bekijk de video van een Frontend Hackathon nog een keer.";
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
  // console.log('entry:', entry);
  // console.log("entry.isIntersecting",entry[0].isIntersecting);
  // console.log('observer:', observer);
  if (entry[0].isIntersecting) {
    // console.log('in the view');
    navigatie.classList.remove('show');
  } else {
    // console.log('out of view');
    navigatie.classList.add('show');
  }

});
observer.observe(header);
