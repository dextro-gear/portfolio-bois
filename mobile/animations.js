import anime from "animejs";

var page = document.querySelector("html");

// NAV OVERLAY ANIMATION
var overlay = document.querySelector(".overlay-body");
console.log(overlay);

var slideUpAnimation = anime({
    targets: overlay,
    translateY: ["0%", "-100%"],
    duration: 500,
    easing: "easeInOutExpo",
    autoplay: false,
});

var dropDownAnimation = anime({
    targets: overlay,
    translateY: ["-100%", "0%"],
    duration: 500,
    easing: "easeInOutExpo",
    autoplay: false,
});

var hamburger = document.querySelector(".hamburger");
var closeButton = document.querySelector(".close-button");

hamburger.addEventListener("click", ()=>{
    dropDownAnimation.play();
    page.style.overflowY = "hidden";
    console.log("Open");

}, false);

closeButton.addEventListener("click", ()=>{
    slideUpAnimation.play();
    page.style.overflowY = "auto";
    console.log("Close");

}, false);
// NAV OVERLAY ANIMATION


// circle rotate animation
var circleThingy = document.querySelector(".circle-thingy");

window.addEventListener("scroll", ()=>{
    circleThingy.style.transform = " rotate(-" + (window.scrollY * 0.3) + "deg)";
}, false);
// circle rotate animation
