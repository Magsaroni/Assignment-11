
function addSound(){
    var soundElem = document.createElement("audio");

    var playButton = document.getElementById("btnPlay");

    var pauseButton = document.getElementById("btnPause");

    soundElem.setAttribute("id", "mySound");
    soundElem.setAttribute("src", "us-lab-background.mp3");

    soundElem.setAttribute("controls", "controls");

    document.body.appendChild(soundElem);

    console.log("sound element added to page.")

    playButton.hidden = false;
    pauseButton.hidden = false;
}

function playSound(){
    var audio = document.getElementById("mySound");
    audio.play();
    console.log("sound played");
}

function pauseSound(){
    var audio = document.getElementById("mySound");
    audio.pause();
    console.log("sound paused");
}
