// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */
var userChoice = "";
var computerChoice = "";
var winner = "";
var randomNumber = 0;

// DOCUMENT READY FUNCTION BELOW
$(document).ready(function() {

    $("#shoot").click(function(){
        randomNumber = Math.random();
        console.log(randomNumber);
        userChoice = $("input").val();
        $("#userChoice").text(userChoice);
        
        if(randomNumber<=.33){
            computerChoice="rock"
        }
        else if(randomNumber<=.66) {
            computerChoice="paper"
        }
        else if(randomNumber<=.99) {
            computerChoice="scissors"
        }
        
        if(userChoice===computerChoice){
            $("#result").text("Winner");
        }
        else{
            $("#result").text("Loser");
        }
    $("#computerChoice").text(computerChoice);
    });
});