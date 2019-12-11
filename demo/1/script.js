var link = document.querySelector('#hackaton_video');
var video = document.querySelector('video');
var pix = document.querySelector('img[src="img/hackatonweb6.jpg"]');
console.log("link", link);
console.log("video", video);
console.log("pix", pix);


link.addEventListener("click",function(){
    console.log(this);
    video.classList.remove('hide');
    video.play();
    pix.classList.add('hide');
    //video.src="img/hackaton.mp4";
  }
);
