// JavaScript File
var bgColor = document.getElementById("bgColor");//Here we state that we want to use an id that we defined back in the html. Turn this into a var so that we can decide what to do with the information
var colorChangeBtn = document.getElementById("colorChangeBtn")//we just tell the file to get the id from another document(defined in the html)

colorChangeBtn.addEventListener("click", function(){//you tell the file to listen for user activity, in this case it is looking for the users click
    document.body.style.backgroundColor = bgColor.value;//here you assign that you want to 
});

