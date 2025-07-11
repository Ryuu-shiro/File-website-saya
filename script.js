// Music Control Button
const bgMusic = document.getElementById('backgroundMusic');
const toggleBtn = document.getElementById('toggleMusic');
toggleBtn.addEventListener('click', () => {
  if (bgMusic.paused) {
    bgMusic.play();
  } else {
    bgMusic.pause();
  }
});

// Album Player
const albumPlayer = document.getElementById('albumPlayer');
const tracks = document.querySelectorAll('.track');
tracks.forEach(track => {
  track.addEventListener('click', () => {
    albumPlayer.src = track.getAttribute('data-src');
    albumPlayer.play();

    // Stop background music
    if (!bgMusic.paused) {
      bgMusic.pause();
    }
  });
});
