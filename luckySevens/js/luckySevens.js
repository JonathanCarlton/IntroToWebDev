function diceRoll(){
    return Math.floor(Math.random() * 6) + 1;
}

function luckySevens(bet){
    if (bet <= 0){
        alert("must enter a number greater then 0");
        document.getElementById("startingBet").value = 0.00;
    }
    else{
        document.getElementById('bet').innerHTML ='$' + bet;
        var currentMoney = Number(bet);
        var maxMoney = currentMoney;
        var maxMoneyRolls = 0;
        var numRolls = 0;
        var dice1 = 0;
        var dice2 = 0;
    
        while (currentMoney > 0){
            dice1 = diceRoll();
            dice2 = diceRoll();
            numRolls += 1;
    
            if(dice1 + dice2 === 7){
                currentMoney +=4;
    
                if (currentMoney > maxMoney){
                    maxMoney = currentMoney;
                    maxMoneyRolls = numRolls;
                }
            }
            else{
                currentMoney -= 1;
            }
        }
    
        alert("Game Over! click 'OK' to view results")
        
        document.getElementById("totalRolls").innerHTML = numRolls;
        document.getElementById("amountWon").innerHTML ='$' + maxMoney;
        document.getElementById("rollAtHighestAmount").innerHTML = maxMoneyRolls;
    
        document.getElementById("results").style.visibility='visible';
    }  
} 
