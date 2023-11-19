const audioElement = document.getElementById('audio');
const playPauseButton = document.getElementById('play-pause');
const previousButton = document.getElementById('previous');
const nextButton = document.getElementById('next');
const playlistElement = document.getElementById('playlist');

let currentSongIndex = 0;

playPauseButton.addEventListener('click', function() {
    if (audioElement.paused) {
        audioElement.play();
        playPauseButton.textContent = 'Pause';
    } else {
        audioElement.pause();
        playPauseButton.textContent = 'Play';
    }
});

previousButton.addEventListener('click', function() {
    if (currentSongIndex > 0) {
        currentSongIndex--;
        updateSong();
    }
});

nextButton.addEventListener('click', function() {
    if (currentSongIndex < playlistElement.children[0].children.length - 1) {
        currentSongIndex++;
        updateSong();
    }
});

playlistElement.addEventListener('click', function(event) {
    if (event.target.tagName === 'A') {
        currentSongIndex = parseInt(event.target.parentNode.getAttribute('data-index'));
        updateSong();
    }
});

function updateSong() {
    const playlistItems = playlistElement.children[0].children;
    const currentSong = playlistItems[currentSongIndex];
    const songTitle = currentSong.textContent;
    const songURL = currentSong.getAttribute('href');

    audioElement.src = songURL;
    audioElement.play();
    playPauseButton.textContent = 'Pause';

    playlistItems.forEach(function(item) {
        item.classList.remove('active');
    });

    currentSong.classList.add('active');
}