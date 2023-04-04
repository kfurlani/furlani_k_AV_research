console.log('loaded the JS file');

const captionToggle = document.querySelector('.caption-toggle');
const video = document.querySelector('video');
const captions = video.textTracks[0];

// Toggle captions
captionToggle.addEventListener('click', function() {
  if (captions.mode === 'showing') {
    captions.mode = 'hidden';
    captionToggle.textContent = 'Show Captions';
  } else {
    captions.mode = 'showing';
    captionToggle.textContent = 'Hide Captions';
  }
});

// Play/pause button
const playBtn = document.querySelector('.play-btn');

playBtn.addEventListener('click', function() {
  if (video.paused) {
    video.play();
    playBtn.innerHTML = '<i class="fas fa-pause"></i>';
  } else {
    video.pause();
    playBtn.innerHTML = '<i class="fas fa-play"></i>';
  }
});

