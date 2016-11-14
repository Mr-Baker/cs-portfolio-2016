// JavaScript File
var bgColor = document.getElementById("bgColor");
var colorChangeBtn = document.getElementById("colorChangeBtn")

colorChangeBtn.addEventListener("click", function(){
    document.body.style.backgroundColor = bgColor.value;
});

