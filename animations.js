var layoutContainer = document.querySelectorAll(".work-layout");
var workImage = document.querySelectorAll(".work-image");
var workTextContainer = document.querySelectorAll(".work-text-container");


// Work thumbnail Background to Foreground animation

layoutContainer.forEach(container => {
    container.addEventListener('mouseover', () => {
        console.log("Mouse is hovering over.");
    });
    
    container.addEventListener('mouseout', () => {
        console.log("Mouse is no longer hovering over.");
    });    
});

