// main.js

// TODO


let volInput = document.getElementById("volume-number");
let volSlider = document.getElementById("volume-slider");
let volImage = document.getElementById("volume-image");

let soundImg = document.getElementById("sound-image");
let audioEle = document.getElementById("horn-sound");
let playBtn = document.getElementById("honk-btn");

let audioSelect = document.getElementById("audio-selection");
let airHorn = document.getElementById("radio-air-horn");
let carHorn = document.getElementById("radio-car-horn");
let partyHorn = document.getElementById("radio-party-horn");





function volInpChange() {
    let vol = (Number(volInput.value));
    volSlider.value = vol;
    updIcon(vol);
    console.log(`Vol input changed to ${vol}`);
    
    audioEle.volume = vol/100;
}

function volSliderChange() {
    let vol = (Number(volSlider.value));
    volInput.value = vol;
    updIcon(vol);
    console.log(`Vol slider changed to ${vol}`);
    audioEle.volume = vol/100;
}

function updIcon(vol){
    // Volume Level 3
    if (vol >= 67){
        volImage.src = "./assets/media/icons/volume-level-3.svg"
        playBtn.disabled = false;
    }
    // Volume Level 2
    else if (vol >= 34){
        volImage.src = "./assets/media/icons/volume-level-2.svg"
        playBtn.disabled = false;
    }
    // Volume Level 1
    else if (vol >= 1){
        volImage.src = "./assets/media/icons/volume-level-1.svg"
        playBtn.disabled = false;
    }
    // Volume Level 0
    else {
        volImage.src = "./assets/media/icons/volume-level-0.svg"
        playBtn.disabled = true;
    }
}

function changeAudio() {
    
    
    if (airHorn.checked){
        console.log(`Chose the air horn!`);
        soundImg.src = "./assets/media/images/air-horn.svg";
        audioEle.src = "./assets/media/audio/air-horn.mp3";
    }
    else if (carHorn.checked) {
        console.log(`Chose the car horn!`);
        soundImg.src = "./assets/media/images/car.svg";
        audioEle.src = "./assets/media/audio/car-horn.mp3";
    }
    else {
        console.log(`Chose the party horn!`);
        soundImg.src = "./assets/media/images/party-horn.svg";
        audioEle.src = "./assets/media/audio/party-horn.mp3";
    }

}

volInput.addEventListener("input", volInpChange)
volSlider.addEventListener("input", volSliderChange)
audioSelect.addEventListener("change", changeAudio)
playBtn.addEventListener("click", function(event) {
    console.log("honk")
    audioEle.play();
    event.preventDefault()
});
