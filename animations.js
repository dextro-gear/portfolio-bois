// import LocomotiveScroll from "locomotive-scroll";

window.addEventListener("scroll", ()=>{
    var scroll = window.scrollY;
    var circleThingy = document.querySelector(".srini-circle");

    circleThingy.style.transform = "rotate(" + (scroll*0.2) + "deg)";
})

var textLayout = document.querySelectorAll(".work-layout");

textLayout.forEach((container)=> {
    var workText = container.querySelector(".work-text-container");

    container.addEventListener("mouseover", ()=>{
        workText.style.opacity = 0.4;
    }, false);

    container.addEventListener("mouseleave", ()=>{
        workText.style.opacity = 1;
    }, false);
});

// travis hover animation
var travisLink = document.querySelector(".travis-link");
var body = document.querySelector("body");

travisLink.addEventListener("mouseover", e=>{
    var travisImage = document.querySelector(".travis");
    travisImage.setAttribute("style", "top:" + e.pageY + "px; left:" + e.pageX + "px; transform: translate(-50%, -50%);");
    travisImage.style.display = "initial";
    console.log("mouseover");
}, false);

travisLink.addEventListener("mouseleave", e=>{
    var travisImage = document.querySelector(".travis");
    travisImage.style.display = "none";
    console.log("mouseleave");
}, false);


// Locomotive scroll
// const scroll = new LocomotiveScroll({
//     el: document.querySelector("[data-scroll-container]"),
//     smooth: true
// });
