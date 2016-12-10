// JavaScript File
var addactiviy = document.getElementById("addactivity");//this is for the button, we needed to add an event listener for it because the user can click the button and add an event
//  var clear = document.getElementById("clear")       This function is no longer needed but could be worked on later to 
var activity = document.getElementById("activity");//this is the actual user input for a new activity
var colorInput = document.getElementById("colorInput");//this variable is used for the <select> and we use this to get the value of what color the user wants to put their activity at
var list = document.getElementById("list");//This is for the <div> that actually displays the users todo list


addactiviy.addEventListener("click", function(){;//this is the main event listener looking for the user to click the add button
    if (activity.value === ""){                   //I just added this so that people can not accidently enter nothing
        alert("Please type an event you would like to add.")
    }
    else{
//I used the else statement so that people do not accidently click enter over and over again without actually typing in their activity
        list.innerHTML += "<div style='color:" + colorInput.value + " '>"/*this is where we can actually add the color to the specific activity, not the entire <div>*/ + activity.value + "</div>";//this is where it actually prints the text that you want to add
        //set the answer to empty      ----  I was trying to add an event that
        //would delete the text that is in the input so that when the user adds another event
        //he would not have to delete the text from his last activity
}


});

list.addEventListener("click",function(evt){
        var targetlist = evt.target/*This is the variable to clear just one event on the list*/
        var confirm2/*this variable is also a confirm but It just works for when you confirm to delete one
        activity from the list, not all the activites. This prevents users from accidently clicking
        the text.*/= confirmationBox2();
        function confirmationBox2(){//basically this is just a function and what it is doing is alerting the user and asking them yes or no
            if (confirm("Would you like to Clear this activity from your To Do list?") === true) {
                targetlist.parentNode.removeChild(targetlist);//we just want to remove the child from the parent node

             } 
             else {
                 return false;//it returns false because we do not want anything to happen
             }

        }
    });

    function deleteActivities(event){   //this is the code that is supposed to allow the user to remove all activities from the list
        var remove = event.target;    // I am trying to target based on the event, so we had to create a new variable for when the delete button was click
        //I did an event target because i was trying it out and wanted to see what it did
        //and what it is targeting is the delete button, I used a css "onclick='function(event)'"
        var confirmation/*confirmation variable is wether or not the user wants to clear the lsit*/ = confirmationBox();/*The box that actually pops up is our function*/
         function confirmationBox(){//this function sends an alert box to confirm that the user would like to clear his to do list
             if (confirm("Would you like to Clear your to do list?") === true) {
                 confirmation = "";//we basically changed the <div id=list> to an empty quote
             } 
             else {
                 return false;//this stops the function so it does not change the list
             }
             document.getElementById("list").innerHTML = confirmation;//we change the <div> to the actual choice that the user has choosen
         }
            
            

    
    
    
    
    
    
            //  alert("Cleared")
            //  list.innerHTML = ""
    
             //list.parentNode.removeChild(list);
     };





//This is code that can be worked on later Matthew, you need to finish the requirements first
//
//
// activity.addEventListener("keypress", function(e){;
// var key = e.which || e.keyCode;
//     if (key === 13) { // 13 is enter
//     var list = document.getElementById("list");
//     list.innerHTML = list.innerHTML  + '<br>' + activity.value;
// }
// });