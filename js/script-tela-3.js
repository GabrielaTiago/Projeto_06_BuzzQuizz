let numberofquestions, numberoflevels;
const storage = [];
function basicQuizz(){
    document.querySelector("main").innerHTML = "";
    document.querySelector("main").innerHTML = `
    <div class="instructions">
            <h2>Comece pelo começo</h2>
        </div>
        <div class="questions-box">
            <input type="text" placeholder="Título do seu quizz">
            <input type="text" placeholder="URL da imagem do seu quizz">
            <input type="text" placeholder="Quantidade de perguntas do quizz">
            <input type="text" placeholder="Quantidade de níveis do quizz">
        </div>
        <button class="red-button" onclick = "questionsQuizz()">
           <p>Prosseguir pra criar perguntas</p>
        </button>`
}

function displayCreationOptions(){
    document.querySelector(".hidden").classList.remove("hidden");
}

function questionsQuizz(){
    const titleValidation = titleQuizzValidation();
    const imageValidation = imageQuizzValidation();
    const numberQValidation = numberQuestionValidation();
    const numberLValidation = numberLevelValidation();
    if(titleValidation === true && numberQValidation === true && numberLValidation === true){
    document.querySelector("main").innerHTML = "";
    document.querySelector("main").innerHTML = `
        <div class="instructions">
            <h2>Crie suas perguntas</h2>
        </div>
        <div class="question-header">
            <p>Pergunta 1</p>
        </div>
        <div class="questions-creation-box questions-box">
            <input type="text" placeholder="Texto da pergunta">
            <input type="text" placeholder="Cor de fundo da pergunta">
            <p>Resposta correta</p>
            <input type="text" placeholder="Resposta correta">
            <input type="text" placeholder="URL da imagem">
            <p>Respostas incorretas</p>
            <input type="text" placeholder="Resposta incorreta 1">
            <input type="text" placeholder="URL da imagem 1">
            <input type="text" placeholder="Resposta incorreta 2">
            <input type="text" placeholder="URL da imagem 2">
            <input type="text" placeholder="Resposta incorreta 3">
            <input type="text" placeholder="URL da imagem 3">
        </div>
        <div class="question-header">
            <p>Pergunta 2</p>
            <ion-icon name="create-outline" onclick="displayCreationOptions()"></ion-icon>
        </div>
        <div class="questions-creation-box questions-box hidden">
            <input type="text" placeholder="Texto da pergunta">
            <input type="text" placeholder="Cor de fundo da pergunta">
            <p>Resposta correta</p>
            <input type="text" placeholder="Resposta correta">
            <input type="text" placeholder="URL da imagem">
            <p>Respostas incorretas</p>
            <input type="text" placeholder="Resposta incorreta 1">
            <input type="text" placeholder="URL da imagem 1">
            <input type="text" placeholder="Resposta incorreta 2">
            <input type="text" placeholder="URL da imagem 2">
            <input type="text" placeholder="Resposta incorreta 3">
            <input type="text" placeholder="URL da imagem 3">
        </div>
        <div class="question-header">
            <p>Pergunta 3</p>
            <ion-icon name="create-outline" onclick="displayCreationOptions()"></ion-icon>
        </div>
        <div class="questions-creation-box questions-box hidden">
            <input type="text" placeholder="Texto da pergunta">
            <input type="text" placeholder="Cor de fundo da pergunta">
            <p>Resposta correta</p>
            <input type="text" placeholder="Resposta correta">
            <input type="text" placeholder="URL da imagem">
            <p>Respostas incorretas</p>
            <input type="text" placeholder="Resposta incorreta 1">
            <input type="text" placeholder="URL da imagem 1">
            <input type="text" placeholder="Resposta incorreta 2">
            <input type="text" placeholder="URL da imagem 2">
            <input type="text" placeholder="Resposta incorreta 3">
            <input type="text" placeholder="URL da imagem 3">
        </div>`
        for(let i=3;i<=numberofquestions;i++){
            document.querySelector("main").innerHTML += `<div class="question-header">
            <p>Pergunta ${i}</p>
            <ion-icon name="create-outline" onclick="displayCreationOptions()"></ion-icon>
        </div>
        <div class="questions-creation-box questions-box hidden">
            <input type="text" placeholder="Texto da pergunta">
            <input type="text" placeholder="Cor de fundo da pergunta">
            <p>Resposta correta</p>
            <input type="text" placeholder="Resposta correta">
            <input type="text" placeholder="URL da imagem">
            <p>Respostas incorretas</p>
            <input type="text" placeholder="Resposta incorreta 1">
            <input type="text" placeholder="URL da imagem 1">
            <input type="text" placeholder="Resposta incorreta 2">
            <input type="text" placeholder="URL da imagem 2">
            <input type="text" placeholder="Resposta incorreta 3">
            <input type="text" placeholder="URL da imagem 3">
        </div>`
        }
        document.querySelector("main").innerHTML += `
        <button class="red-button" onclick = "levelQuizz()">
           <p>Prosseguir pra criar níveis</p>
        </button>`
        }else{
            alert("Preencha os dados corretamente!");
        }
    }

function levelQuizz(){
    document.querySelector("main").innerHTML = "";
    document.querySelector("main").innerHTML = `
    <div class="instructions">
            <h2>Agora, decida os níveis</h2>
        </div>
        <div class="question-header">
            <p>Nível 1</p>
        </div>
        <div class="questions-level-box questions-box">
            <input type="text" placeholder="Título do nível">
            <input type="text" placeholder="% de acerto mínima">
            <input type="text" placeholder="URL da imagem do nível">
            <input type="text" placeholder="Descrição do nível">
        </div>
        <div class="question-header">
            <p>Nível 2</p>
            <ion-icon name="create-outline" onclick="displayCreationOptions()"></ion-icon>
        </div>
        <div class="questions-level-box questions-box hidden">
            <input type="text" placeholder="Título do nível">
            <input type="text" placeholder="% de acerto mínima">
            <input type="text" placeholder="URL da imagem do nível">
            <input type="text" placeholder="Descrição do nível">
        </div>`
        for(let i=2;i<=numberoflevels;i++){
            document.querySelector("main").innerHTML += `<div class="question-header">
            <p>Nível ${i}</p>
            <ion-icon name="create-outline" onclick="displayCreationOptions()"></ion-icon>
        </div>
        <div class="questions-level-box questions-box hidden">
            <input type="text" placeholder="Título do nível">
            <input type="text" placeholder="% de acerto mínima">
            <input type="text" placeholder="URL da imagem do nível">
            <input type="text" placeholder="Descrição do nível">
        </div>`
        }

        document.querySelector("main").innerHTML += `
        <button class="red-button" onclick="finishQuizz()">
            <p>Finalizar Quizz</p>
         </button>`
}

function finishQuizz(){
    document.querySelector("main").innerHTML = "";
    document.querySelector("main").innerHTML = `
     <div class="instructions">
            <h2>Seu quizz está pronto!</h2>
        </div>
        <div class="image-finish-quizz" style="background-image: url(https://i0.statig.com.br/bancodeimagens/4m/cc/p6/4mccp6uuwtdrw5ui3f19y29k5.jpg);">
           <p>Finalmente acabei o layout do Quizz!</p>
        </div>
        <button class="red-button">
            <p>Acessar Quizz</p>
         </button>
         <p>Voltar para home</p>
         `
}

function titleQuizzValidation(){
    const title = document.querySelector(".questions-box").firstElementChild.value
    if(title.length >= 20 || title.length <= 65){
        storage.title = title;
        return true;
    }
}

function imageQuizzValidation(){
    const image = document.querySelector(".questions-box").children[1].value
    storage.image = image;
}

function numberQuestionValidation(){
    numberofquestions = document.querySelector(".questions-box").children[2].value
    if(numberofquestions >= 3){
        storage.questions = new Array(numberofquestions);
        return true;
    }
}

function numberLevelValidation(){
    numberoflevels = document.querySelector(".questions-box").children[3].value
    if(numberoflevels >= 2){
        storage.questions = new Array(numberoflevels);
        return true;
    }
}

//function questionCreationValidation(){
//    for(let i=1; i > numberofquestions; i++){
//        const validation = document.querySelector("main").children[i+1]
//    for(let j = 0; j > )
//}
//Tomei um checkmate dessa função e não consigo mais progredir.