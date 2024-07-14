let userScore =0;
let computerScore =0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const uScore = document.querySelector("#user-score");
const compScore = document.querySelector("#computer-score");

const genComputerChoice = () =>{
    const choices = ["rock", "paper", "scissors"];
    const index = Math.floor(Math.random() *3);
    return choices[index];
}

choices.forEach((choice) =>{
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

const drawGame = () =>{
    console.log("Game Draw!");
    msg.innerText = "Game Draw! Play again";
    msg.style.backgroundColor ="#081b31";
}

const showWinner=(userWin, userChoice, computerChoice)=>{
    if(userWin){
        userScore++;
        uScore.innerText=userScore;
        console.log("You Win!");
        msg.innerText = `You Win! your ${userChoice} beats ${computerChoice}`;
        msg.style.backgroundColor ="green";
    }else{
        computerScore++;
        compScore.innerText=computerScore;
        console.log("You Lose!");
        msg.innerText = `You Lose! ${computerChoice} beats your ${userChoice}`;
        msg.style.backgroundColor ="red";
    }
}

const playGame = (userChoice) =>{
    console.log("User Choice :", userChoice);
    const computerChoice = genComputerChoice();
    console.log("Computer Choice :", computerChoice);
    if(userChoice === computerChoice){
        drawGame();
    }else{
        let userWin = true;
        if(userChoice==="rock"){
            userWin =computerChoice==="paper"?false:true;

        }else if(userChoice==="paper"){
            userWin =computerChoice==="scissors"?false:true;

        }else{
            userWin =computerChoice==="rock"?false:true;

        }

        showWinner(userWin, userChoice, computerChoice);
    }
}
