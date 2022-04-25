// Variáveis globais. //
let selectedQuizzContent = "";
let totalPercentageScore = 0;
let score = 0;
let totalOfAnsweredQuestions = 0;

// Função para buscar quizz selecionado no servidor. //
function getSelectedQuizz(quizzID) {

    let selectedQuizz = axios.get(`https://mock-api.driven.com.br/api/v6/buzzquizz/quizzes/${quizzID}`);

    selectedQuizz.then(showSelectedQuizzOnScreen);
    selectedQuizz.catch();
}

getSelectedQuizz();

// Função para exibir quizz selecionado na tela. //
function showSelectedQuizzOnScreen (result) {

    selectedQuizzContent = result;

    let randomizingAnswers = 0;

    // Randomizando ordem das respostas => //
    for (let i = 0; i < selectedQuizzContent.data.questions.length; i++) {

        randomizingAnswers = selectedQuizzContent.data.questions[i].answers;
    
        randomizingAnswers.sort(() => Math.random() - 0.5);
    }
    // <= Randomizando ordem das respostas //
    
    let addBackgroundImage = document.querySelector(".quizz-title-box");
    addBackgroundImage.innerHTML = "";
    addBackgroundImage.innerHTML += `
    <img src = "${selectedQuizzContent.data.image}">
    <h3>${selectedQuizzContent.data.title}</h3>`

    let addQuestions = document.querySelector(".question-container");
    addQuestions.innerHTML = "";
    
    
    if (selectedQuizzContent.data.questions[0].answers.length === 4) {
        for (let i = 0; i < selectedQuizzContent.data.questions.length; i++) {
            addQuestions.innerHTML += `
            <div class = "question-title" style = "background-color: ${selectedQuizzContent.data.questions[i].color}">
                <span>${selectedQuizzContent.data.questions[i].title}</span>
            </div>
            <div class = "question-box">
                <figure class = "answerImage ${selectedQuizzContent.data.questions[i].answers[0].isCorrectAnswer}" onclick = "chosenAnswer(this)">
                    <img src = "${selectedQuizzContent.data.questions[i].answers[0].image}">
                    <figcaption class = "selectedCaption">${selectedQuizzContent.data.questions[i].answers[0].text}</figcaption>
                </figure>
                <figure class = "answerImage ${selectedQuizzContent.data.questions[i].answers[1].isCorrectAnswer}" onclick = "chosenAnswer(this)">
                    <img src = "${selectedQuizzContent.data.questions[i].answers[1].image}">
                    <figcaption class = "selectedCaption">${selectedQuizzContent.data.questions[i].answers[1].text}</figcaption>
                </figure>
                <figure class = "answerImage ${selectedQuizzContent.data.questions[i].answers[2].isCorrectAnswer}" onclick = "chosenAnswer(this)">
                    <img src = "${selectedQuizzContent.data.questions[i].answers[2].image}">
                    <figcaption class = "selectedCaption">${selectedQuizzContent.data.questions[i].answers[2].text}</figcaption>
                </figure>
                <figure class = "answerImage ${selectedQuizzContent.data.questions[i].answers[3].isCorrectAnswer}" onclick = "chosenAnswer(this)">
                    <img src = "${selectedQuizzContent.data.questions[i].answers[3].image}">
                    <figcaption class = "selectedCaption">${selectedQuizzContent.data.questions[i].answers[3].text}</figcaption>
                </figure>
            </div>`
        }
    
    } else if (selectedQuizzContent.data.questions[0].answers.length === 3) {
        for (let i = 0; i < selectedQuizzContent.data.questions.length; i++) {
            addQuestions.innerHTML += `
            <div class = "question-title" style = "background-color: ${selectedQuizzContent.data.questions[i].color}">
            <span>${selectedQuizzContent.data.questions[i].title}</span>
            </div>
            <div class = "question-box">
                <figure class = "image ${selectedQuizzContent.data.questions[i].answers[0].isCorrectAnswer}" onclick = "chosenAnswer(this)">
                    <img src = "${selectedQuizzContent.data.questions[i].answers[0].image}">
                    <figcaption class = "selectedCaption">${selectedQuizzContent.data.questions[i].answers[0].text}</figcaption>
                </figure>
                <figure class = "image ${selectedQuizzContent.data.questions[i].answers[1].isCorrectAnswer}" onclick = "chosenAnswer(this)">
                    <img src = "${selectedQuizzContent.data.questions[i].answers[1].image}">
                    <figcaption class = "selectedCaption">${selectedQuizzContent.data.questions[i].answers[1].text}</figcaption>
                </figure>
                <figure class = "image ${selectedQuizzContent.data.questions[i].answers[2].isCorrectAnswer}" onclick = "chosenAnswer(this)">
                    <img src = "${selectedQuizzContent.data.questions[i].answers[2].image}">
                    <figcaption class = "selectedCaption">${selectedQuizzContent.data.questions[i].answers[2].text}</figcaption>
                </figure>
            </div>`
        }

    } else if (selectedQuizzContent.data.questions[0].answers.length === 2) {
        for (let i = 0; i < selectedQuizzContent.data.questions.length; i++) {
            addQuestions.innerHTML += `
            <div class = "question-title" style = "background-color: ${selectedQuizzContent.data.questions[i].color}">
            <span>${selectedQuizzContent.data.questions[i].title}</span>
            </div>
            <div class = "question-box">
                <figure class = "image ${selectedQuizzContent.data.questions[i].answers[0].isCorrectAnswer}" onclick = "chosenAnswer(this)">
                    <img src = "${selectedQuizzContent.data.questions[i].answers[0].image}">
                    <figcaption class = "selectedCaption">${selectedQuizzContent.data.questions[i].answers[2].text}</figcaption>
                </figure>
                <figure class = "image ${selectedQuizzContent.data.questions[i].answers[1].isCorrectAnswer}" onclick = "chosenAnswer(this)">
                    <img src = "${selectedQuizzContent.data.questions[i].answers[1].image}">
                    <figcaption class = "selectedCaption">${selectedQuizzContent.data.questions[i].answers[2].text}</figcaption>
                </figure>
            </div>`
        }
    }
}

// Função para marcar resposta escolhida (esbranquiçada e não) como certa ou errada (verde ou vermelha). //
function chosenAnswer(answerOptions) {

    let chosenAnswerOption = answerOptions.parentNode;
    let selectingFigures = chosenAnswerOption.children;

    totalOfAnsweredQuestions = totalOfAnsweredQuestions++;

    for(let i = 0; i < selectingFigures.length; i++) {
        
        selectingFigures[i].setAttribute("onclick", "");
        selectingFigures[i].classList.add("whitened-image");

        if(selectingFigures[i].classList.contains('true')) {
            const imageCaption = selectingFigures[i].lastElementChild;
            imageCaption.classList.add("green-text");

        } else {
            const imageCaption = selectingFigures[i].lastElementChild;
            imageCaption.classList.add("red-text");
        }
    }

    answerOptions.classList.remove("whitened-image");

    if (answerOptions.classList.contains("true")) {
        score = score++;
    }

    for(let i = 0; i < selectedQuizzContent.data.questions.length; i++) {

        if (selectedQuizzContent.data.questions.length === totalOfAnsweredQuestions) {
            calculatingScore();
        }
    }

    // Função para scrollar após 2 segundos de respondida a pargunta. //
    setTimeout(function() {
        answerOptions.parentNode.nextElementSibling.scrollIntoView({behavior: "smooth", block:"start"})
    }, 2000);
}

// Função para exibir resultado do quizz. //
function calculatingScore(quizzResult) {

console.log("entrou na calculatingScore");

    let arrayOfLevels = [];
    let higherMinValue = 0;
    let higherIndex = 0;

    totalPercentageScore = Math.floor((score / totalOfAnsweredQuestions) * 100); // porcentagem exibida.

    for(let i = 0; i < arrayOflevels.length; i++) {

        if(arrayOfLevels[i].minValue === 0) {
            let showResults = document.querySelector(".quizz-results-container");
            showResults.innerHTML = "";
            showResults.innerHTML += `
            <div class = "score">${totalPercentageScore + "% de acertos: " + arrayOfLevels[i].title}</div>
                    <div class = "level-discription">
                        <figure class = "level-image">
                            <img src = "${arrayOfLevels[i].image}">
                        </figure>
                        <p class = "level-text">${arrayOfLevels[i].text}</p>
                    </div>`

        } else if (totalPercentageScore >= arrayOfLevels[i].minValue) {

            if (arrayOfLevels[i].minValue > higherMinValue) {
                higherMinValue = arrayOfLevels[i].minValue;
                higherIndex = i;
            }

            let showResults = document.querySelector(".quizz-results-container");

            showResults.innerHTML = "";
            showResults.innerHTML += `
            <div class = "score">${totalPercentageScore + "% de acertos: " + arrayOfLevels[higherIndex].title}</div>
                    <div class = "level-discription">
                        <figure class = "level-image">
                            <img src="${arrayOfLevels[higherIndex].image}">
                        </figure>
                        <p class = "level-text">${arrayOfLevels[higherIndex].text}</p>
                    </div>`
        }
    }

    // Função para descer para a caixa de resultados depois de 2 segundos. //
    if (quizzResult == quizzResult.parentNode.parentNode.parentNode.lastChild) {
        setTimeout(function () {
            quizzResult.parentNode.parentNode.parentNode.nextElementSibling.scrollIntoView({behavior: 'smooth', block:'center'})
        }, 2000);
    }

}