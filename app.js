
// DONT DELETE ANY
const endSubmit = document.querySelector("#submit");
const endRestart = document.querySelector("#restart")
const goToTop = document.querySelector("#go-to-top");

const allQuestions = document.querySelectorAll(".question-container");
const introduction = document.querySelector(".introduction");
const introDesc = document.querySelector("#intro-desc");

const incorrectAnswersQ1 = document.querySelectorAll(".incorrect-answers1");
const incorrectAnswersQ2 = document.querySelectorAll(".incorrect-answers2");
const incorrectAnswersQ3 = document.querySelectorAll(".incorrect-answers3");
const incorrectAnswersQ4 = document.querySelectorAll(".incorrect-answers4");
const incorrectAnswersQ5 = document.querySelectorAll(".incorrect-answers5");
const incorrectAnswersQ6 = document.querySelectorAll(".incorrect-answers6");
const incorrectAnswersQ7 = document.querySelectorAll(".incorrect-answers7");
const incorrectAnswersQ8 = document.querySelectorAll(".incorrect-answers8");
const incorrectAnswersQ9 = document.querySelectorAll(".incorrect-answers9");
const incorrectAnswersQ10 = document.querySelectorAll(".incorrect-answers10");

const correctAnswerQ1 = document.querySelector("#correctq1");
const correctAnswerQ2 = document.querySelector("#correctq2");
const correctAnswerQ3 = document.querySelector("#correctq3");
const correctAnswerQ4 = document.querySelector("#correctq4");
const correctAnswerQ5 = document.querySelector("#correctq5");
const correctAnswerQ6 = document.querySelector("#correctq6");
const correctAnswerQ7 = document.querySelector("#correctq7");
const correctAnswerQ8 = document.querySelector("#correctq8");
const correctAnswerQ9 = document.querySelector("#correctq9");
const correctAnswerQ10 = document.querySelector("#correctq10");

// In Version 4:
// ---- ADD NAVBAR AT THE BOTTOM THAT'S FIXED THAT HAS MY NAME AND DATE AND INFO FOR PROJECT
// ---- ADD SOUND FOR CORRECT ANSWERS
// ---- ADD ANIMATION (+1) FOR CORRECT ANSWERS
// ---- ADD A CELEBRATION LINE AND RANKING IN SCORE SCREEN DEPENDING ON WHAT THE SCORE IS (10/10 - TOTAL WEEB)

// In Version 5: 
// ---- TRY TO FIND A WAY TO RUN MANY OF THESE FUNCTIONS AS A LOOP SO THE JS ISNT SO CROWDED

let total = 0;

const correctGuess1 = () => {

    for (answers of incorrectAnswersQ1) {
        answers.style.backgroundColor = "red";
        answers.style.transition = "background-color 0.6s ease";
        answers.innerHTML += " - (INCORRECT!)"
    }

    correctAnswerQ1.style.backgroundColor = "chartreuse";
    correctAnswerQ1.style.transition = "background-color 0.6s ease";
    correctAnswerQ1.innerHTML += " - (CORRECT!)";

    for (let answers of incorrectAnswersQ1) {
        answers.disabled = true;
    }
    correctAnswerQ1.disabled = true;

    total += 1
}

const incorrectGuess1 = () => {

    for (answers of incorrectAnswersQ1) {
        answers.style.backgroundColor = "red";
        answers.style.transition = "background-color 0.6s ease";
        answers.innerHTML += " - (INCORRECT!)"
    }
    
    correctAnswerQ1.style.backgroundColor = "#fff05a";
    correctAnswerQ1.style.transition = "background-color 0.6s ease";
    correctAnswerQ1.innerHTML += " - (CORRECT!)";

    for (let answers of incorrectAnswersQ1) {
        answers.disabled = true;
    }
    correctAnswerQ1.disabled = true;
}

const correctGuess2 = () => {

    for (answers of incorrectAnswersQ2) {
        answers.style.backgroundColor = "red";
        answers.style.transition = "background-color 0.6s ease";
        answers.innerHTML += " - (INCORRECT!)"
    }

    correctAnswerQ2.style.backgroundColor = "chartreuse";
    correctAnswerQ2.style.transition = "background-color 0.6s ease";
    correctAnswerQ2.innerHTML += " - (CORRECT!)"

    for (let answers of incorrectAnswersQ2) {
        answers.disabled = true;
    }
    correctAnswerQ2.disabled = true;
    total += 1
}

const incorrectGuess2 = () => {
    for (answers of incorrectAnswersQ2) {
        answers.style.backgroundColor = "red";
        answers.style.transition = "background-color 0.6s ease";
        answers.innerHTML += " - (INCORRECT!)"
    }

    correctAnswerQ2.style.backgroundColor = "#fff05a";
    correctAnswerQ2.style.transition = "background-color 0.6s ease";
    correctAnswerQ2.innerHTML += " - (CORRECT!)"

    for (let answers of incorrectAnswersQ2) {
        answers.disabled = true;
    }
    correctAnswerQ2.disabled = true;
}

const correctGuess3 = () => {
    for (answers of incorrectAnswersQ3) {
        answers.style.backgroundColor = "red";
        answers.style.transition = "background-color 0.6s ease";
        answers.innerHTML += " - (INCORRECT!)"
    }

    correctAnswerQ3.style.backgroundColor = "chartreuse";
    correctAnswerQ3.style.transition = "background-color 0.6s ease";
    correctAnswerQ3.innerHTML += " - (CORRECT!)"

    for (let answers of incorrectAnswersQ3) {
        answers.disabled = true;
    }
    correctAnswerQ3.disabled = true;
    total += 1
}

const incorrectGuess3 = () => {
    for (answers of incorrectAnswersQ3) {
        answers.style.backgroundColor = "red";
        answers.style.transition = "background-color 0.6s ease";
        answers.innerHTML += " - (INCORRECT!)"
    }

    correctAnswerQ3.style.backgroundColor = "#fff05a";
    correctAnswerQ3.style.transition = "background-color 0.6s ease";
    correctAnswerQ3.innerHTML += " - (CORRECT!)"

    for (let answers of incorrectAnswersQ3) {
        answers.disabled = true;
    }
    correctAnswerQ3.disabled = true;
}

const correctGuess4 = () => {
    for (answers of incorrectAnswersQ4) {
        answers.style.backgroundColor = "red";
        answers.style.transition = "background-color 0.6s ease";
        answers.innerHTML += " - (INCORRECT!)"
    }

    correctAnswerQ4.style.backgroundColor = "chartreuse";
    correctAnswerQ4.style.transition = "background-color 0.6s ease";
    correctAnswerQ4.innerHTML += " - (CORRECT!)"

    for (let answers of incorrectAnswersQ4) {
        answers.disabled = true;
    }
    correctAnswerQ4.disabled = true;
    total += 1
}

const incorrectGuess4 = () => {
    for (answers of incorrectAnswersQ4) {
        answers.style.backgroundColor = "red";
        answers.style.transition = "background-color 0.6s ease";
        answers.innerHTML += " - (INCORRECT!)"
    }

    correctAnswerQ4.style.backgroundColor = "#fff05a";
    correctAnswerQ4.style.transition = "background-color 0.6s ease";
    correctAnswerQ4.innerHTML += " - (CORRECT!)"

    for (let answers of incorrectAnswersQ4) {
        answers.disabled = true;
    }
    correctAnswerQ4.disabled = true;
}

const correctGuess5 = () => {
    for (answers of incorrectAnswersQ5) {
        answers.style.backgroundColor = "red";
        answers.style.transition = "background-color 0.6s ease";
        answers.innerHTML += " - (INCORRECT!)"
    }

    correctAnswerQ5.style.backgroundColor = "chartreuse";
    correctAnswerQ5.style.transition = "background-color 0.6s ease";
    correctAnswerQ5.innerHTML += " - (CORRECT!)"

    for (let answers of incorrectAnswersQ5) {
        answers.disabled = true;
    }
    correctAnswerQ5.disabled = true;
    total += 1
}

const incorrectGuess5 = () => {
    for (answers of incorrectAnswersQ5) {
        answers.style.backgroundColor = "red";
        answers.style.transition = "background-color 0.6s ease";
        answers.innerHTML += " - (INCORRECT!)"
    }

    correctAnswerQ5.style.backgroundColor = "#fff05a";
    correctAnswerQ5.style.transition = "background-color 0.6s ease";
    correctAnswerQ5.innerHTML += " - (CORRECT!)"

    for (let answers of incorrectAnswersQ5) {
        answers.disabled = true;
    }
    correctAnswerQ5.disabled = true;
}

const correctGuess6 = () => {
    for (answers of incorrectAnswersQ6) {
        answers.style.backgroundColor = "red";
        answers.style.transition = "background-color 0.6s ease";
        answers.innerHTML += " - (INCORRECT!)"
    }

    correctAnswerQ6.style.backgroundColor = "chartreuse";
    correctAnswerQ6.style.transition = "background-color 0.6s ease";
    correctAnswerQ6.innerHTML += " - (CORRECT!)"

    for (let answers of incorrectAnswersQ6) {
        answers.disabled = true;
    }
    correctAnswerQ6.disabled = true;
    total += 1
}

const incorrectGuess6 = () => {
    for (answers of incorrectAnswersQ6) {
        answers.style.backgroundColor = "red";
        answers.style.transition = "background-color 0.6s ease";
        answers.innerHTML += " - (INCORRECT!)"
    }

    correctAnswerQ6.style.backgroundColor = "#fff05a";
    correctAnswerQ6.style.transition = "background-color 0.6s ease";
    correctAnswerQ6.innerHTML += " - (CORRECT!)"

    for (let answers of incorrectAnswersQ6) {
        answers.disabled = true;
    }
    correctAnswerQ6.disabled = true;
}

const correctGuess7 = () => {
    for (answers of incorrectAnswersQ7) {
        answers.style.backgroundColor = "red";
        answers.style.transition = "background-color 0.6s ease";
        answers.innerHTML += " - (INCORRECT!)"
    }

    correctAnswerQ7.style.backgroundColor = "chartreuse";
    correctAnswerQ7.style.transition = "background-color 0.6s ease";
    correctAnswerQ7.innerHTML += " - (CORRECT!)"

    for (let answers of incorrectAnswersQ7) {
        answers.disabled = true;
    }
    correctAnswerQ7.disabled = true;
    total += 1
}

const incorrectGuess7 = () => {
    for (answers of incorrectAnswersQ7) {
        answers.style.backgroundColor = "red";
        answers.style.transition = "background-color 0.6s ease";
        answers.innerHTML += " - (INCORRECT!)"
    }

    correctAnswerQ7.style.backgroundColor = "#fff05a";
    correctAnswerQ7.style.transition = "background-color 0.6s ease";
    correctAnswerQ7.innerHTML += " - (CORRECT!)"

    for (let answers of incorrectAnswersQ7) {
        answers.disabled = true;
    }
    correctAnswerQ7.disabled = true;
}

const correctGuess8 = () => {
    for (answers of incorrectAnswersQ8) {
        answers.style.backgroundColor = "red";
        answers.style.transition = "background-color 0.6s ease";
        answers.innerHTML += " - (INCORRECT!)"
    }

    correctAnswerQ8.style.backgroundColor = "chartreuse";
    correctAnswerQ8.style.transition = "background-color 0.6s ease";
    correctAnswerQ8.innerHTML += " - (CORRECT!)"

    for (let answers of incorrectAnswersQ8) {
        answers.disabled = true;
    }
    correctAnswerQ8.disabled = true;
    total += 1
}

const incorrectGuess8 = () => {
    for (answers of incorrectAnswersQ8) {
        answers.style.backgroundColor = "red";
        answers.style.transition = "background-color 0.6s ease";
        answers.innerHTML += " - (INCORRECT!)"
    }

    correctAnswerQ8.style.backgroundColor = "#fff05a";
    correctAnswerQ8.style.transition = "background-color 0.6s ease";
    correctAnswerQ8.innerHTML += " - (CORRECT!)"

    for (let answers of incorrectAnswersQ8) {
        answers.disabled = true;
    }
    correctAnswerQ8.disabled = true;
}

const correctGuess9 = () => {
    for (answers of incorrectAnswersQ9) {
        answers.style.backgroundColor = "red";
        answers.style.transition = "background-color 0.6s ease";
        answers.innerHTML += " - (INCORRECT!)"
    }

    correctAnswerQ9.style.backgroundColor = "chartreuse";
    correctAnswerQ9.style.transition = "background-color 0.6s ease";
    correctAnswerQ9.innerHTML += " - (CORRECT!)"

    for (let answers of incorrectAnswersQ9) {
        answers.disabled = true;
    }
    correctAnswerQ9.disabled = true;
    total += 1
}

const incorrectGuess9 = () => {
    for (answers of incorrectAnswersQ9) {
        answers.style.backgroundColor = "red";
        answers.style.transition = "background-color 0.6s ease";
        answers.innerHTML += " - (INCORRECT!)"
    }

    correctAnswerQ9.style.backgroundColor = "#fff05a";
    correctAnswerQ9.style.transition = "background-color 0.6s ease";
    correctAnswerQ9.innerHTML += " - (CORRECT!)"

    for (let answers of incorrectAnswersQ9) {
        answers.disabled = true;
    }
    correctAnswerQ9.disabled = true;
}

const correctGuess10 = () => {
    for (answers of incorrectAnswersQ10) {
        answers.style.backgroundColor = "red";
        answers.style.transition = "background-color 0.6s ease";
        answers.innerHTML += " - (INCORRECT!)"
    }

    correctAnswerQ10.style.backgroundColor = "chartreuse";
    correctAnswerQ10.style.transition = "background-color 0.6s ease";
    correctAnswerQ10.innerHTML += " - (CORRECT!)"

    for (let answers of incorrectAnswersQ10) {
        answers.disabled = true;
    }
    correctAnswerQ10.disabled = true;
    total += 1
}

const incorrectGuess10 = () => {
    for (answers of incorrectAnswersQ10) {
        answers.style.backgroundColor = "red";
        answers.style.transition = "background-color 0.6s ease";
        answers.innerHTML += " - (INCORRECT!)"
    }

    correctAnswerQ10.style.backgroundColor = "#fff05a";
    correctAnswerQ10.style.transition = "background-color 0.6s ease";
    correctAnswerQ10.innerHTML += " - (CORRECT!)"

    for (let answers of incorrectAnswersQ10) {
        answers.disabled = true;
    }
    correctAnswerQ10.disabled = true;
}

const removeElements = () => {
    for (let questions of allQuestions) {
        questions.remove();
    }
    endSubmit.remove();
    goToTop.remove();

    // CHANGE THE INNERHTML OF THIS WITH A LOOP FOR WHAT SCORE YOU GET
    introDesc.remove();

}

const addScore = () => {
    var score = document.createElement("h3");
    if (total < 0) {
        total = 0;
    }
    score.innerHTML = (`${total}/10`);
    score.classList.add("score");
    introduction.insertAdjacentElement("afterend" , score);
}

const sendToTop = () => {
    scroll(0,0)
}

const restart = () => {
    location.reload();
}


// first question
correctAnswerQ1.addEventListener("click" , correctGuess1);
for (answers of incorrectAnswersQ1) {
    answers.addEventListener("click" , incorrectGuess1);
}

// second question
correctAnswerQ2.addEventListener("click" , correctGuess2);
for (answers of incorrectAnswersQ2) {
    answers.addEventListener("click" , incorrectGuess2);
}

// third question
correctAnswerQ3.addEventListener("click" , correctGuess3);
for (answers of incorrectAnswersQ3) {
    answers.addEventListener("click" , incorrectGuess3);
}

// fourth question
correctAnswerQ4.addEventListener("click" , correctGuess4);
for (answers of incorrectAnswersQ4) {
    answers.addEventListener("click" , incorrectGuess4);
}

// fifth question
correctAnswerQ5.addEventListener("click" , correctGuess5);
for (answers of incorrectAnswersQ5) {
    answers.addEventListener("click" , incorrectGuess5);
}

// sixth question
correctAnswerQ6.addEventListener("click" , correctGuess6);
for (answers of incorrectAnswersQ6) {
    answers.addEventListener("click" , incorrectGuess6);
}

// seventh question
correctAnswerQ7.addEventListener("click" , correctGuess7);
for (answers of incorrectAnswersQ7) {
    answers.addEventListener("click" , incorrectGuess7);
}

// eighth question
correctAnswerQ8.addEventListener("click" , correctGuess8);
for (answers of incorrectAnswersQ8) {
    answers.addEventListener("click" , incorrectGuess8);
}

// ninth question
correctAnswerQ9.addEventListener("click" , correctGuess9);
for (answers of incorrectAnswersQ9) {
    answers.addEventListener("click" , incorrectGuess9);
}

// tenth question
correctAnswerQ10.addEventListener("click" , correctGuess10);
for (answers of incorrectAnswersQ10) {
    answers.addEventListener("click" , incorrectGuess10);
}

// submits answers
endSubmit.addEventListener("click" , removeElements);
endSubmit.addEventListener("click" , addScore);
// sends user to top of page
goToTop.addEventListener("click" , sendToTop)
// restarts application (reloads page)
endRestart.addEventListener("click" , restart);
