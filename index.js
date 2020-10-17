const { event } = require("jquery");

var currentPage = "Desktop";

window.addEventListener("resize", (event)=>{
    if(screen.width >= 767 && currentPage != "Desktop"){
        currentPage = "DesktopPage";
        event.preventDefault();
        document.location.href = "/index.html";
    }
    if(screen.width < 767 && currentPage != "Mobile"){
        currentPage = "Mobile";
        event.preventDefault();
        document.location.href = "/mobile.html" ;
    }
}, false);