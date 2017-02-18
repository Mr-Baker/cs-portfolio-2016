// JavaScript File

var send = document.getElementById("send");//this is for the button, we needed to add an event listener for it because the user can click the button and add an event
//  var clear = document.getElementById("clear")       This function is no longer needed but could be worked on later to 
var userChat = document.getElementById("userChat");//this is the actual user input for a new activity
//var colorInput = document.getElementById("colorInput");//this variable is used for the <select> and we use this to get the value of what color the user wants to put their activity at
var showChat = document.getElementById("showChat");//This is for the <div> that actually displays the users todo list

var greetings = ["Hello","What the heck do you want"]

send.addEventListener("click", function(){;//this is the main event listener looking for the user to click the add button
    if (userChat.value === ""){                   //I just added this so that people can not accidently enter nothing
        alert("Please type an event you would like to add.")
    }
    else if (userChat.value === "Hello"){                   //I just added this so that people can not accidently enter nothing
        showChat.innerHTML += "<br>" + "<div>" /*style='color: + colorInput.value + " '*/ /*this is where we can actually add the color to the specific activity, not the entire <div>*/ + greetings + "</div>";//
    }
    else{
//I used the else statement so that people do not accidently click enter over and over again without actually typing in their activity
        showChat.innerHTML += "<div>" /*style='color: + colorInput.value + " '*/ /*this is where we can actually add the color to the specific activity, not the entire <div>*/ + userChat.value + "</div>";//this is where it actually prints the text that you want to add
        
        //set the answer to empty      ----  I was trying to add an event that
        //would delete the text that is in the input so that when the user adds another event
        //he would not have to delete the text from his last activity
}


});