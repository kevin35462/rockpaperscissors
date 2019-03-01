// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */
var userChoice = "";
var computerChoice = "";
var winner = "";
var randomNumber = 0;
var input = document.getElementById("myInp");

// DOCUMENT READY FUNCTION BELOW
$(document).ready(function() {

    $("#shoot").click(function(){
        
        randomNumber = Math.random();
        console.log(randomNumber);
        userChoice = $("#myInp").val().toLowerCase();
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
            $("#result").html("<h1>Nobody Wins</h1>");
        }
         else if(userChoice==="rock"||userChoice==="Rock"){
            if(computerChoice==="scissors"){
                $("#result").html("<h1>User Wins</h1>");
            }
                else{
                    $("#result").html("<h1>Computer Wins</h1>");
        }
        }
         else if(userChoice==="paper"){
            if(computerChoice==="rock"){
                $("#result").html("<h1>User Wins</h1>");
            }
                else{
                    $("#result").html("<h1>Computer Wins</h1>");
        }
        }
         else if(userChoice==="scissors"){
            if(computerChoice==="paper"){
                $("#result").html("<h1>User Wins</h1>");
            }
                else{
                    $("#result").html("<h1>Computer Wins</h1>");
        }
        }
    $("#computerChoice").html("<h1>"+computerChoice+"</h1>");
    if(userChoice===""){
        $("#result").html("<h1>Please Write rock , paper , or scissors</h1>");
        $("#computerChoice").html("");
        }
    });
});
input.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("shoot").click();
    }
});
