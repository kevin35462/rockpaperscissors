// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */
var userChoice="";
var computerChoice="";
var winner="";
var randomNumber=Math.random();


// DOCUMENT READY FUNCTION BELOW
$("#shoot").click(function(){
    userChoice = $("input").val();
    $("#userChoice").text(userChoice);
    if(randomNumber<=.33){
        computerChoice="rock"
    }
    else if(randomNumber<=.66)
        computerChoice="paper"
    else if(randomNumber<=.99)
        computerChoice="scissors"
        
});