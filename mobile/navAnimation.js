import anime from "animejs";

var overlay = document.querySelector(".overlay-body");
console.log(overlay);

var slideUpAnimation = anime({
    targets: overlay,
    translateY: ["0%","-100%"],
    duration: 500,
    easing: "easeInOutExpo",
});

var dropDownAnimation = anime({
    targets: overlay,
    translateY: ["-100%", "0%"],
    duration: 500,
    easing: "easeInOutExpo",
});

var hamburger = document.querySelector(".hamburger");
var closeButton = document.querySelector(".close-button");

hamburger.addEventListener("click", ()=>{
    dropDownAnimation.play();
    console.log("Open");

}, false);

closeButton.addEventListener("click", ()=>{
    slideUpAnimation.play();
    console.log("Close");

}, false);