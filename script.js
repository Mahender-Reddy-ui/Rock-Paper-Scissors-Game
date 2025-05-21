// let Allimg = document.querySelectorAll('.imagecontainer img');
// console.log(Allimg)

// let userChoice;
// let compChoice;

// let userScore = 0;
// let compScore = 0;


// function compChoicefunc() {
//     let arr = ['rock', 'paper', 'scissors'];
//     let var1 = Math.floor(Math.random() * 3);
//     compChoice = arr[var1];
//     return compChoice;
// }

// function gameImp(u) {
//     compChoice = compChoicefunc();
//     alert(`user selected ${userChoice} and computer selected ${compChoice}`);

//     if (compChoice === userChoice) {
//         btn.innerHTML = "Game Draw!!"
//     }



//     else if (compChoice === 'rock' && userChoice === 'paper' || compChoice
//         === 'scissor' && userChoice === 'rock' || compChoice === 'paper' &&
//         userChoice === 'scissor') {
//         btn.innerHTML = 'Hurray!!! User Won'
//         userScore++;
//         userscore.innerHTML = userScore;
//     }

//     else {
//         btn.innerHTML = 'Computer Won';
//         compScore++;
//         compscore.innerHTML = compScore;

//     }
// }

// Allimg.forEach((i) => {
//     i.addEventListener('click', () => {
//         userChoice = i.id;
//         gameImp(userChoice)

//     })
// })
let Allimg = document.querySelectorAll('.imagecontainer img');

let userChoice;
let compChoice;

let userScore = 0;
let compScore = 0;

let userscore = document.getElementById("userscore");
let compscore = document.getElementById("compscore");
let btn = document.getElementById("btn");

function compChoicefunc() {
    let arr = ['rock', 'paper', 'scissors'];
    let var1 = Math.floor(Math.random() * 3);
    compChoice = arr[var1];
    return compChoice;
}

function gameImp(u) {
    compChoice = compChoicefunc();
    alert(`User selected ${userChoice} and Computer selected ${compChoice}`);

    if (compChoice === userChoice) {
        btn.innerHTML = "Game Draw!!";
    } else if (
        (compChoice === 'rock' && userChoice === 'paper') ||
        (compChoice === 'scissors' && userChoice === 'rock') ||
        (compChoice === 'paper' && userChoice === 'scissors')
    ) {
        btn.innerHTML = 'Hurray!!! User Won';
        userScore++;
        userscore.innerHTML = userScore;
    } else {
        btn.innerHTML = 'Computer Won';
        compScore++;
        compscore.innerHTML = compScore;
    }

    checkFinalWinner();
}

function checkFinalWinner() {
    if (userScore === 5) {
        btn.innerHTML = "🎉 User is the Final Winner!";
        disableGame();
    } else if (compScore === 5) {
        btn.innerHTML = "💻 Computer is the Final Winner!";
        disableGame();
    }
}

function disableGame() {
    Allimg.forEach(img => {
        img.style.pointerEvents = "none";
    });
}

// Reset button logic
document.getElementById("reset").addEventListener("click", () => {
    userScore = 0;
    compScore = 0;
    userscore.innerHTML = userScore;
    compscore.innerHTML = compScore;
    btn.innerHTML = "Result";
    Allimg.forEach(img => {
        img.style.pointerEvents = "auto";
    });
});

Allimg.forEach((i) => {
    i.addEventListener('click', () => {
        userChoice = i.id;
        gameImp(userChoice);
    });
});
