    let playerScore = 0;
    let compScore = 0;
    let winState = false;
    let playerSB = 0;
    let compSB = 0;

    document.getElementById("PlayerScore").innerHTML = "Player: " + playerScore;
    document.getElementById("CompScore").innerHTML = "Computer: " + compScore;

    //Function for handeling game logics (pre-Win function)
    function PointHandler(e){
        if (winState == false){

            const x = Math.floor(Math.random() * 3) +1;
            console.log(e + "\n" + x +"\n");
    
            if (e == 1 && x == 3 || e == 2 && x == 1 || e == 3 && x == 2){
                playerScore++;
            }else (compScore++);
    
            document.getElementById("PlayerScore").innerHTML = "Player: " + playerScore;
            document.getElementById("CompScore").innerHTML = "Computer: " + compScore;
    
            if (playerScore >= 3){
                winState = true;
                playerSB++;
                document.getElementById("Score").innerHTML = "You Win!"
                document.getElementById("playAgainBtn").style.visibility = "visible";
            }else if (compScore >= 3){
                winState = true;
                compSB++;
                document.getElementById("Score").innerHTML = "You Lose!"
                document.getElementById("playAgainBtn").style.visibility = "visible";
            }
        }
    }
    
    //Function for handeling past-win condition (reset-function)
    function Reset(){
        playerScore = 0;
        compScore = 0;
        winState = false;

        document.getElementById("Score").innerHTML = "Score";

        document.getElementById("PlayerScore").innerHTML = "Player: " + playerScore;
        document.getElementById("CompScore").innerHTML = "Computer: " + compScore;

        document.getElementById("playAgainBtn").style.visibility = "hidden";

        document.getElementById("Score").innerHTML = playerSB + " - Score - " + compSB;
    }