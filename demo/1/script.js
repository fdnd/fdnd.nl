var link = document.querySelector('#hackaton_video');
var video = document.querySelector('video');
var pix = document.querySelector('img[src="img/hackatonweb6.jpg"]');
console.log("link", link);
console.log("video", video);
console.log("pix", pix);

/* VIDEO ***
  Croppen,Trimmen, exporteren https://online-video-cutter.com
  MOV to MP4 https://www.onlineconverter.com/mov-to-mp4
*/

link.addEventListener("click",function(){
    pix.classList.add('hide');
    video.classList.remove('hide');
    video.play();
    //video.src="img/hackaton.mp4";
  }
);
