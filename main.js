function showTime() {    
    let time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();

if (hours >12) {
    hours = hours-12;
}

if (hours <10) {
    hours = "0" + hours;
}


if (minutes <10) {
    minutes = "0" + minutes;
}

if (seconds <10) {
    seconds = "0" + seconds;
}


let watch = document.getElementById("watch");
watch.textContent = hours + ":" + minutes + ":" + seconds


setTimeout(function() {
    showTime();
}, 1000)

}

showTime()