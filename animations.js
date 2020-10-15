import "./node_modules/jquery/dist/jquery.js";
// import "./node_modules/smooth-scrollbar/dist/smooth-scrollbar.js";

// var Scrollbar = window.Scrollbar;

var win = $(window);
var circleThingy = $(".srini-circle");

win.on("scroll", ()=>{
    circleThingy.css("transform","rotate(" + (win.scrollTop() * 0.2) +"deg)" );
})

// Scrollbar.init(document.querySelector("body"));