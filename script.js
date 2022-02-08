let videoModal = document.querySelector("#videoModal");
let playVideo = document.querySelector("#videoBtn");
let closeVideo = document.querySelector("#closeBtn");

playVideo.onclick = function() {
  videoModal.style.display = "block";
}

closeVideo.onclick = function() {
  videoModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == videoModal) {
    videoModal.style.display = "none";
  }
}