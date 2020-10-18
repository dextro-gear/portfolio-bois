// import LocomotiveScroll from "locomotive-scroll";
import $ from "jquery";

/* CIRCLE THINGY SCROLL ROTATE ANIMATION */
window.addEventListener("scroll", ()=>{
    var scroll = window.scrollY;
    var circleThingy = document.querySelector(".srini-circle");

    circleThingy.style.transform = "rotate(" + (scroll*0.2) + "deg)";
})
/* CIRCLE THINGY SCROLL ROTATE ANIMATION */



/* WORK THUMBNAIL OPACITY ANIMATION */
var textLayout = document.querySelectorAll(".work-layout");

textLayout.forEach((container)=> {
    var workText = container.querySelector(".work-text-container");
    var workImage = container.querySelector(".work-image");

    workImage.addEventListener("mouseover", ()=>{
        workText.style.opacity = 0.4;
    }, false);

    workImage.addEventListener("mouseleave", ()=>{
        workText.style.opacity = 1;
    }, false);
});
/* WORK THUMBNAIL OPACITY ANIMATION */



/* TRAVIS HOVER ANIMATION */
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
/* TRAVIS HOVER ANIMATION */



/* CUSTOM CURSOR */
// window.addEventListener("mousemove", event=>{
//     var cursor = document.querySelector(".cursor");
//     cursor.style.top = event.pageY + "px";
//     cursor.style.left = event.pageX + "px";
// }, false);
/* CUSTOM CURSOR */



/* VIEW CURSOR */
var viewCursor = $(".view-cursor");
var workImage = $(".work-image");

$(document).on("mousemove", (event)=>{
    viewCursor.css("top", event.pageY + "px");
    viewCursor.css("left", event.pageX + "px");
})
workImage.on("mouseenter", ()=>{
    viewCursor.css("transform", "scale(1)");
});

workImage.on("mouseleave", ()=>{
    viewCursor.css("transform", "scale(0)");
});
/* VIEW CURSOR */


// Locomotive scroll
// const scroll = new LocomotiveScroll({
//     el: document.querySelector("[data-scroll-container]"),
//     smooth: true
// });
