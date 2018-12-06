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
        $("#userChoice").html("<h1>"+userChoice+"</h1>");
        
        if(randomNumber<=.33){
            computerChoice="rock";
        }
        else if(randomNumber<=.66) {
            computerChoice="paper";
        }
        else{
            computerChoice="scissors";
        }
        
        if(userChoice===computerChoice){
            $("#result").html("<h1>Tie</h1>");
        }
         else if(userChoice==="rock"||userChoice==="Rock"){
            if(computerChoice==="scissors"){
                $("#result").html("<h1>Winner</h1>");
            }
                else{
                    $("#result").html("<h1>loser</h1>");
        }
        }
         else if(userChoice==="paper"){
            if(computerChoice==="rock"){
                $("#result").html("<h1>Winner</h1>");
            }
                else{
                    $("#result").html("<h1>loser</h1>");
        }
        }
         else if(userChoice==="scissors"){
            if(computerChoice==="paper"){
                $("#result").html("<h1>Winner</h1>");
            }
                else{
                    $("#result").html("<h1>loser</h1>");
        }
        }
    $("#computerChoice").html("<h1>"+computerChoice+"</h1>");
    });
});