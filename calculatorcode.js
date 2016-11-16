// JavaScript File
var userNumber1 = document.getElementById("userNumber1");//Here we state that we want to use an id that we defined back in the html. Turn this into a var so that we can decide what to do with the information
var userNumber2 = document.getElementById("userNumber2");
var userFunction = document.getElementById("userFunction");
var runCalculate = document.getElementById("runCalculate");//we are telling the program to take the id from the html


runCalculate.addEventListener("click", function(){


var selected = userFunction.value;//New variable that we use to check what option is used by the user of the calcluator



 if (selected === "+"){
     var answer = parseInt(userNumber1.value) + parseInt(userNumber2.value);
     //answer.innerHTML = "answer";
     document.getElementById("answer").innerHTML = answer;
}

else if (selected === "-"){
     var answer = parseInt(userNumber1.value) - parseInt(userNumber2.value);
     //answer.innerHTML = "answer";
     document.getElementById("answer").innerHTML = answer;
}
    
else if (selected === "*"){
     var answer = parseInt(userNumber1.value) * parseInt(userNumber2.value);
     //answer.innerHTML = "answer";
     document.getElementById("answer").innerHTML = answer;
}

else if (selected === "/"){
     var answer = parseInt(userNumber1.value) / parseInt(userNumber2.value);
     //answer.innerHTML = "answer";
     document.getElementById("answer").innerHTML = answer;
}

else if (selected === "^"){
     var answer = Math.pow(parseInt(userNumber1.value), parseInt(userNumber2.value));
     //answer.innerHTML = "answer";
     document.getElementById("answer").innerHTML = answer;
}

})