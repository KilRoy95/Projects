    let playerScore = 0;
    let compScore = 0;
    document.getElementById("PlayerScore").innerHTML = "Player: " + playerScore;
    document.getElementById("CompScore").innerHTML = "Computer: " + compScore;

    function PointHandler(e){

        const x = Math.floor(Math.random() * 3) +1;
        console.log(e + "\n" + x +"\n");

        if (e == 1 && x == 3 || e == 2 && x == 1 || e == 3 && x == 2){
            playerScore++;
        }else (compScore++);

        document.getElementById("PlayerScore").innerHTML = "Player: " + playerScore;
        document.getElementById("CompScore").innerHTML = "Computer: " + compScore;

        if (playerScore >= 3){
            document.getElementById("Score").innerHTML = "You Win!"

            document.getElementById("playAgainBtn").style.visibility = "visible";
        }

        if (compScore >= 3){
            document.getElementById("Score").innerHTML = "You Lose!"

            document.getElementById("playAgainBtn").style.visibility = "visible";
        }
    }
    
    function Reset(){
        playerScore = 0;
        compScore = 0;

        document.getElementById("Score").innerHTML = "Score";

        document.getElementById("PlayerScore").innerHTML = "Player: " + playerScore;
        document.getElementById("CompScore").innerHTML = "Computer: " + compScore;

        document.getElementById("playAgainBtn").style.visibility = "hidden";
    }