//input for stuff

let strokeTime = 2000;
let gradientTime = 600;

//end of input
document.getElementById("image-2").style.opacity = "0";

setTimeout(() => {
    document.getElementById("image-2").style.opacity = "1";
    slideFromLeft("image-2", 500, 1, 1, 43);
}, 1000);
