import "./node_modules/jquery/dist/jquery.js";

var win = $(window);
var circleThingy = $(".srini-circle");

win.on("scroll", ()=>{
    circleThingy.css("transform","rotate(" + (win.scrollTop() * 0.2) +"deg)" );
})