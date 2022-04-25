const input = require("prompt-sync")();

//Let's initialize the game
console.log(`Hello ! We all know how to play rock paper and scissor right ? You'll be playing against a bot.`);

//Let's add a count for every win and loss
var countSets = 0, playerCount = 0, botCount = 0;
let botChoice = ["rock","paper","scissor","paper","scissor","rock","scissor","rock","paper"];

//botChoice will be randomized

let randomNumber = (min,max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    var value = Math.floor(Math.random() * (max - min +1)) + min;
        return value
    };

//Begin
let playerName = input("What's your name ? : "), botName = input("Give a name for your opponent : "), setsNumber = +input("How many sets ? : ");

while(true){
    let choice = input("rock/paper/scissor ? : ");
    var opponentChoice = botChoice[randomNumber(0,8)];
    countSets++;
    
    console.log(`${playerName}: ${choice} Vs ${botName} :${opponentChoice}`);

    if(choice == "rock" && opponentChoice == "rock"){
        console.log(`It's a tie !`);
    }
    if(choice == "rock" && opponentChoice == "paper"){
        console.log(`${botName} wins!`);
        botCount++;
    }
    if(choice == "rock" && opponentChoice == "scissor"){
        console.log(`${playerName} wins!`);
        playerCount++;
    }


    if(choice == "paper" && opponentChoice == "rock"){
        console.log(`${playerName} wins!`);
        playerCount++;
    }
    if(choice == "paper" && opponentChoice == "paper"){
        console.log(`It's a tie !`);
    }
    if(choice == "paper" && opponentChoice == "scissor"){
        console.log(`${botName} wins!`);
        botCount++;
    }

    if(choice == "scissor" && opponentChoice == "rock"){
        console.log(`${botName} wins!`);
        botCount++;
    }
    if(choice == "scissor" && opponentChoice == "paper"){
        console.log(`${playerName} wins!`);
        playerCount++;
    }
    if(choice == "scissor" && opponentChoice == "scissor"){
        console.log(`It's a tie !`);
    }
    
    if(countSets == setsNumber){
        playerCount > botCount ? console.log(`Well done ! Congratulations ${playerName} ! You won the game!`) : console.log(`Good game ! Next time you may beat ${botName} !`);
        break;
    }
    else if(choice == "exit"){
        console.log("Alright !  It's your choice !");
        break;
    }
}