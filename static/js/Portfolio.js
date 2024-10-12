// Dynamically load the Typed.js library
var typedScript = document.createElement('script');
typedScript.src = 'https://cdn.jsdelivr.net/npm/typed.js@2.0.12';
typedScript.onload = function() {
    var options = {
        strings: ["Kerene Wright","A Developer", "A Student", "Just a Girl"],
        typeSpeed: 50,
        backSpeed: 50,
        backDelay: 1000,
        startDelay: 100,
        loop: true
    };
    
    var typed = new Typed(".typed", options);
};
document.head.appendChild(typedScript);
