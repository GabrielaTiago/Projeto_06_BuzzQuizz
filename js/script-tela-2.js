// Função para buscar quizz selecionado no servidor. //
function getSelectedQuizz(quizzID) {
    let selectedQuizz = axios.get(`https://mock-api.driven.com.br/api/v6/buzzquizz/quizzes/${quizzID}`);
    selectedQuizz.then(showSelectedQuizzOnScreen);
    selectedQuizz.catch(console.log("algo está errado !"));
}

getSelectedQuizz(24);

// Função para exibir quizz selecionado na tela. //
function showSelectedQuizzOnScreen(selectedQuizzContent) {

    console.log(selectedQuizzContent);
    
    let addBackgroundImage = document.querySelector(".quizz-title-box");
    addBackgroundImage.innerHTML = "";
    addBackgroundImage.innerHTML += `
    <img src = "${selectedQuizzContent.data.image}">
    <h3>${selectedQuizzContent.data.title}</h3>`

    let addQuestions = document.querySelector(".question-container");
    addQuestions.innerHTML = "";

    if (selectedQuizzContent.data.questions[0].answers.length === 5) {
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
                <figure class = "answerImage ${selectedQuizzContent.data.questions[i].answers[4].isCorrectAnswer}" onclick = "chosenAnswer(this)">
                    <img src = "${selectedQuizzContent.data.questions[i].answers[4].image}">
                    <figcaption class = "selectedCaption">${selectedQuizzContent.data.questions[i].answers[4].text}</figcaption>
                </figure>
            </div>`

            //addQuestions = addQuestions.sort(() => Math.random() - 0.5);
        }
            
    } else if (selectedQuizzContent.data.questions[0].answers.length === 4) {
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

            //addQuestions = addQuestions.sort(() => Math.random() - 0.5);
            
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

            //addQuestions = addQuestions.sort(() => Math.random() - 0.5);

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
                    <figcaption>${selectedQuizzContent.data.questions[i].answers[0].text}</figcaption>
                </figure>
                <figure class = "image ${selectedQuizzContent.data.questions[i].answers[1].isCorrectAnswer}" onclick = "chosenAnswer(this)">
                    <img src = "${selectedQuizzContent.data.questions[i].answers[1].image}">
                    <figcaption class = "selectedCaption">${selectedQuizzContent.data.questions[i].answers[2].text}</figcaption>
                    <figcaption>${selectedQuizzContent.data.questions[i].answers[1].text}</figcaption>
                </figure>
            </div>`

            //addQuestions = addQuestions.sort(() => Math.random() - 0.5);
        }
    }
}

// Função para marcar resposta escolhida (esbranquiçada e não) como certa ou errada (verde ou vermelha). //
function chosenAnswer(answerOptions) {

    let chosenAnswerOption = answerOptions.parentNode;
    let selectingFigures = chosenAnswerOption.children;

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

    // Função para scrollar após 2 segundos de respondida a pargunta. //
    setTimeout(function() {
        answerOptions.scrollIntoView({behavior: 'smooth', block:'center'})
    }, 2000);

}

// Função para retornar à página inicial (tela 1). Botão. //
function backToHomepage(){
    document.querySelector(".loading-screen").classList.remove("hidden");
    document.querySelector(".quizz-screen").classList.add("hidden");
    setTimeout(()=>{
        document.querySelector(".loading-screen").classList.add("hidden");
        document.querySelector(".first-screen").classList.remove("hidden");
        document.querySelector(".space-added").scrollIntoView();
    }, 1000);
}

console.log("oi")