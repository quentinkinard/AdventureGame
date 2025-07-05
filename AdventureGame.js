
const readline = require("node:readline")

// Get player name using readline-sync
// Create variables for player stats
let playerName = ""
let playerHealth = 100
let playerGold = 20
let currentLocation = "village"
let gameRunning = true
let inventory = []
/*
Adventure Game
This game will be a text-based game where the player will be able
to make choices that affect the outcome of the game.
The player will be able to choose their own path and the story will change
based on their decisions.
*/

// Display the game title
console.log("Welcome to the Adventure Game");

// Add a welcome message
console.log("Prepare yourself for an epic journey!");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  //Get player's name
  rl.question('Who is so brave to go on this adventure? ', (playerName) => {
    console.log(`Hello, ${playerName}!`);
    console.log("You start with " + playerGold + " gold!")
    rl.close(); // Close the interface when you're done
  }); 
  