var a = document.querySelector(".bulb");
var btn = document.querySelector(".on");
btn.addEventListener("click", function(){
    a.style.backgroundColor="yellow";
})
var btn2 = document.querySelector(".off");
btn2.addEventListener("click", function(){
    a.style.backgroundColor="white"
})

