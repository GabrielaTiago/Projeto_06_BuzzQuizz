function goToQuizz(){
    document.querySelector(".second-screen").classList.remove("hidden");
    document.querySelector(".container-user-quizzes").classList.add("hidden");
    document.querySelector(".container-quizzes").classList.add("hidden");
}

function showQuizzes(){
    const promisse = axios.get("https://mock-api.driven.com.br/api/v6/buzzquizz/quizzes");

    promisse.then(getAllQuizzes);
}
showQuizzes();

function getAllQuizzes(response){
     console.log(response);
     response.data;

        for(let i=0; i < response.data.length; i++){
            const image = response.data[i].image;
            const title = response.data[i].title;
            const id = response.data[i].id;
            const quizzes = document.querySelector(".quizzes");

            quizzes.innerHTML += `
                <div class="individual-quizz image" style="background-image: url(${image});" onclick="goToQuizz(${id})">
                    <h3>${title}</h3>
                </div>
            `

        }
}
