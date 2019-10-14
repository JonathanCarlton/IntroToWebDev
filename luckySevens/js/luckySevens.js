// diceroll function, gernerates a random value between 1 - 6
function diceRoll(){
    return Math.floor(Math.random() * 6) + 1;
}

// function for lucky sevens game, takes number as input and rolls dice until number hits zero
// if dices rolls a 7 number increases by 4, if not, money decreases by 1
function luckySevens(bet){
    // initial check to make sure user entered valid number (must be greater than zero)
    if (bet <= 0){
        alert("must enter a number greater then 0");
        document.getElementById("startingBet").value = 0.00;
    }

    // if check passes, runs game
    else{
        document.getElementById('bet').innerHTML ='<small>$</small>' + bet;
        
        // game variables
        var currentMoney = Number(bet);
        var maxMoney = currentMoney;
        var maxMoneyRolls = 0;
        var numRolls = 0;
        var dice1 = 0;
        var dice2 = 0;
    
        // while the currently held money is greater than zero, run the game
        while (currentMoney > 0){
            dice1 = diceRoll();
            dice2 = diceRoll();
            numRolls += 1;
    
            // if dice rolls ad up to 7, add 4 to the players currentMoney
            if(dice1 + dice2 === 7){
                currentMoney +=4;
                 
                // if current money after this roll is higher than the previous max, make this the new max value
                // aswell as the number of rolls that have currently happened
                if (currentMoney > maxMoney){
                    maxMoney = currentMoney;
                    maxMoneyRolls = numRolls;
                }
            }
            // if dice dont add up to zero, decrease money by one
            else{
                currentMoney -= 1;
            }
        }
    
        // once currentMoney reaches zero, end game and display results on screen
        alert("Game Over! click 'OK' to view results")
        
        document.getElementById("totalRolls").innerHTML = numRolls;
        document.getElementById("amountWon").innerHTML ='<small>$</small>' + maxMoney;
        document.getElementById("rollAtHighestAmount").innerHTML = maxMoneyRolls;
    
        document.getElementById("results").style.visibility='visible';
        document.getElementById("play").value = "Play Again"
    }  
} 
