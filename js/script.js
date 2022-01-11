const open = document.querySelector(".hamber");
const close = document.querySelector(".close");
const nav = document.querySelector(".myList");
const mv = document.querySelectorAll(".mv");
open.onclick = function() {
    nav.classList.add("open");
    mv.forEach(element=> {
        element.classList.add("move");
        element.style.display="none";
    });
}
close.onclick = function() {
    nav.classList.remove("open");
    mv.forEach(element=> {
        element.classList.remove("move");
        element.style.display="block";
    });
}
window.onresize = function () {
    if(document.body.clientWidth>= 950) {
        close.click();
    }
}
function cl() {
    if(document.body.clientWidth>= 950) {
        close.click();
    }
}
cl();
