// JavaScript File

var send = document.getElementById("send"); //this is for the button, we needed to add an event listener for it because the user can click the button and add an event
//  var clear = document.getElementById("clear")       This function is no longer needed but could be worked on later to 
//var colorInput = document.getElementById("colorInput");//this variable is used for the <select> and we use this to get the value of what color the user wants to put their activity at

var userChat = document.getElementById("userChat"); //this is the actual user input for a new activity

var chatBox = document.getElementById("chatBox")

var jorgeResponse = {
    greetings: ["Hello there! My name is Jorge, whats yours?", "What the heck do you want.", "Get the heck away from me!", "Wassup boi, my name is JORGE and I love to talk."],
    nameHate: ["I dont want to talk anymore.","Stop talking to me."],
    nameDeveloper: ["Welcome creator. What would you like to program for me today?", "What is up my Creator. What do you have in mind for today?"]
};



//var greetings = ["Hello","What the heck do you want"]




send.addEventListener("click", function() {; //this is the main event listener looking for the user to click the add button
    var showUserChat = "<div style='color:white;border-color:#00b33c;padding: 10px 10px 10px 10px;background-color: #00b33c;border-width: 2px;border-radius: 10px; min-width:50px; max-width:40%;margin-right: 0; margin-left: auto'>" + userChat.value + "</div>"
    var lowerUserChat = userChat.value.toLowerCase() //lowercase the users input
    //    var showJorgeChat = "<div style='color:white;border-color:#999999;background-color: #999999;border-width: 2px;padding: 10px 10px 10px 10px;border-radius: 10px;/*text-align: right;*/ min-width:50px;max-width:40%;'>" + randomJorgeResponse + "</div>"
//Above is a universal variabel for the jorge chat looks. You have to copy and paste it into the else if statements
    
    //Beginning of the RegExp word searching codes
    
        //For hello
    var hello = new RegExp("hello")
    var jorgeSearchHello = hello.test(lowerUserChat)
    
        //For names that JORGE HATES
    var nameKenson = new RegExp("kenson")
    var jorgeSearchKenson = nameKenson.test(lowerUserChat)
    
    var nameTrump = new RegExp("trump")
    var jorgeSearchTrump = nameTrump.test(lowerUserChat)
    
        //For the Developer
    var nameLL = new RegExp("lechuga lord")
    var jorgeSearchLL = nameLL.test(lowerUserChat)
    
    var nameMB = new RegExp("matthew baker")
    var jorgeSearchMB= nameMB.test(lowerUserChat)
    
        //For names that JORGE LIKES
    


    if ( /*lowerCaseUserChat.value*/ lowerUserChat === "") { //I just added this so that people can not accidently enter nothing
        alert("Please type a message.")
    }
    else if (jorgeSearchHello === true) {
        var randomJorgeResponse = jorgeResponse.greetings[Math.floor(Math.random() * jorgeResponse.greetings.length)];
        var showJorgeChat = "<div style='color:white;border-color:#999999;background-color: #999999;border-width: 2px;padding: 10px 10px 10px 10px;border-radius: 10px;/*text-align: right;*/ min-width:50px;max-width:40%;margin-right: auto; margin-left: 0'>" + randomJorgeResponse + "</div>"
        chatBox.innerHTML += "<br>" + showUserChat + "<br>" + showJorgeChat; //
        var objChatBox = document.getElementById("chatBox");
        objChatBox.scrollTop = objChatBox.scrollHeight;
        userChat.value = "";
    }
    else if (jorgeSearchKenson===true||jorgeSearchTrump===true) {
        var randomJorgeResponse = jorgeResponse.nameHate[Math.floor(Math.random() * jorgeResponse.nameHate.length)];
        var showJorgeChat = "<div style='color:white;border-color:#999999;background-color: #999999;border-width: 2px;padding: 10px 10px 10px 10px;border-radius: 10px;/*text-align: right;*/ min-width:50px;max-width:40%;margin-right: auto; margin-left: 0'>" + randomJorgeResponse + "</div>"
        chatBox.innerHTML += "<br>" + showUserChat + "<br>" + showJorgeChat; //
        var objChatBox = document.getElementById("chatBox");
        objChatBox.scrollTop = objChatBox.scrollHeight;
        userChat.value = "";
    }
    else if (jorgeSearchLL===true||jorgeSearchMB===true) {
        var randomJorgeResponse = jorgeResponse.nameDeveloper[Math.floor(Math.random() * jorgeResponse.nameDeveloper.length)];
        var showJorgeChat = "<div style='color:white;border-color:#999999;background-color: #999999;border-width: 2px;padding: 10px 10px 10px 10px;border-radius: 10px;/*text-align: right;*/ min-width:50px;max-width:40%;margin-right: auto; margin-left: 0'>" + randomJorgeResponse + "</div>"
        chatBox.innerHTML += "<br>" + showUserChat + "<br>" + showJorgeChat; //
        var objChatBox = document.getElementById("chatBox");
        objChatBox.scrollTop = objChatBox.scrollHeight;
        userChat.value = "";
    }
    else {
        //I used the else statement so that people do not accidently click enter over and over again without actually typing in their activity
        chatBox.innerHTML += "<br>" + showUserChat
        var objChatBox = document.getElementById("chatBox");
        objChatBox.scrollTop = objChatBox.scrollHeight;
        userChat.value = "";
    }


});
