const get = (id) => document.getElementById(id);

const video = get('video');
const play = get('play');
const stop = get('stop');
const progress = get('progress');
const timestamp = get('timestamp');


// Functions
// Paly and pause video
function toggleVideoStatus() {
    if(video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

// Update the play/pause icon
function updatePlayIcon() {
    if(video.paused) {
        play.innerHTML = '<i class="fa fa-play fa-2x"></i>'
    } else {
        play.innerHTML = '<i class="fa fa-pause fa-2x"></i>'
    }
}

// Update progress and timestamp
function updateProgress() {
    progress.value = (video.currentTime / video.duration) * 100;
    
    // Get minutes
    let mins = Math.floor(video.currentTime / 60);
    if(mins < 10) {
        mins = '0' + mins;
    }

    // Get seconds
    let secs = Math.floor(video.currentTime % 60)
    if(secs < 10) {
        secs = '0' + secs;
    }

    timestamp.innerHTML = `${mins}:${secs}`
}

// Set the video time to the progress current value
function setVideoProgress() {
    video.currentTime = (+progress.value * video.duration) / 100;
}

// Stop the video
function stopVideo() {
    video.currentTime = 0;
    video.pause();
}


// Event listeners
video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);


play.addEventListener('click', toggleVideoStatus);

stop.addEventListener('click', stopVideo);

progress.addEventListener('change', setVideoProgress);