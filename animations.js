import Scrollbar from "smooth-scrollbar";

document.addEventListener("scroll", ()=>{
    console.log(window.scrollY())
})

Scrollbar.init(document.querySelector("html"), {
    "damping": 0.5,
});
