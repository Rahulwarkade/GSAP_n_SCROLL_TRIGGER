var modal = document.querySelector("#modal");
var fs = document.querySelector("#fs");
var box = document.querySelector("#box");
modal.addEventListener("click",function(){
    fs.style.pointerEvents = "initial";
    fs.style.opacity = "1";
    box.style.top = "20px";
});
var close = document.querySelector("#close");

close.addEventListener("click",function(){
    fs.style.pointerEvents = "none";
    fs.style.opacity = 0;
    box.style.top = "-20px";
})

