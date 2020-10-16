// import Scrollbar from "smooth-scrollbar";

window.addEventListener("scroll", ()=>{
    var scroll = window.scrollY;
    var circleThingy = document.querySelector(".srini-circle");

    circleThingy.style.transform = "rotate(" + (scroll*0.2) + "deg)";
})

// Scrollbar.init(document.querySelector("html"), {
//     "damping": 0.5,
// });
