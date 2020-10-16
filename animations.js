// import Scrollbar from "smooth-scrollbar";

const { contains } = require("jquery");

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


// Scrollbar.init(document.querySelector("html"), {
//     "damping": 0.5,
// });
