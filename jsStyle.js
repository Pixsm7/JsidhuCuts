window.addEventListener("load", function () {
    if (!localStorage.getItem("visited")) {
        
        document.getElementById("preloader").style.display = "flex";

        setTimeout(function () {
            document.getElementById("preloader").style.display = "none";
            localStorage.setItem("visited", "true"); 
        }, 3000); 
    } else {
        
        document.getElementById("preloader").style.display = "none";
    }
});
document.addEventListener("DOMContentLoaded", function () {
    document.body.classList.add("loaded");
});

function typeText(elementId, text, speed = 100) {
    let index = 0;
    function type() {
        if (index < text.length) {
            document.getElementById(elementId).innerHTML += text.charAt(index);
            index++;
            setTimeout(type, speed);
        }
    }
    if (document.getElementById(elementId)) {
        type();
    }
}

window.onload = function () {
    typeText("typing-text", "Welcome to JSidhuCuts", 100);
    typeText("gallery-typing-text", "Gallery", 100);
    typeText("booking-typing-text", "Booking An Appointment", 100);
};

