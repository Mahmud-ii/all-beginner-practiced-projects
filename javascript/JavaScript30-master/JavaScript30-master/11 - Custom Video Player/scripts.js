const video = document.querySelector('.viewer')
const progress = document.querySelector('.progress')
const progressFilled = document.querySelector('.progress__filled')
const toggle = document.querySelector('.toggle')
const inputRange = document.querySelectorAll('.player__slider')
const playerBtn = document.querySelectorAll('.player__button')


function togglePlay(){
    video[video.paused ? "play" : "pause"]()
    toggle.innerText = video.paused ? "►" : "❚ ❚"
}

function toggleBtn(){
    togglePlay()
}

function updateRange(){
    if(this.name === "volume"){
        video.volume = this.value
    }
    if(this.name === "playbackRate"){
        video.playbackRate = this.value
    }
}

function updateTime(){
    if(this.dataset.skip === "25"){
        video.currentTime += 25
    }else{
        video.currentTime += -10
    }
}

function progressUpdate(e){
    const percent = (video.currentTime / video.duration) * 100;
    progressFilled.style.flexBasis = `${percent}%`
}

function scrub(e){
    let dash = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = dash;
}

video.addEventListener("click", togglePlay)
toggle.addEventListener("click", toggleBtn)

video.addEventListener("timeupdate", progressUpdate)

inputRange.forEach(range => {
    range.addEventListener("change", updateRange)
})
playerBtn.forEach(time => {
    time.addEventListener("click", updateTime)
})


let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);
