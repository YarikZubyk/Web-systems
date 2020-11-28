window.addEventListener("load", function() {
    var menuStyle = getComputedStyle(menu);
    trigger.onclick = function(){
        if(menuStyle.display == "none"){
            menu.classList.add("active");
        }else{
            menu.classList.remove("active");
        }
    }
});



var playButton = document.getElementById("play_button");
// Event listener for the play/pause button
playButton.addEventListener("click", function() {
  if (video.paused == true) {
    video.play();
    playButton.classList.add("play")
    playButton.classList.remove("pause")
  } else {
    video.pause();
    playButton.classList.add("pause")
    playButton.classList.remove("play")
  }
});