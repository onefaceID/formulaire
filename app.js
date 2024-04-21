const quizPython = [
    {
      question: "Quel est l'opérateur pour l'exponentiation en Python ?",
      options: ["^", "**", "*", "//"],
      answer: 1 // L'index de la réponse correcte dans le tableau des options
    },
    {
      question: "Quelle est la méthode pour ajouter un élément à la fin d'une liste en Python ?",
      options: [".add()", ".push()", ".append()", ".insert()"],
      answer: 2
    },
    {
      question: "Quelle fonction est utilisée pour lire une entrée de l'utilisateur en Python ?",
      options: ["input()", "get_input()", "read_input()", "user_input()"],
      answer: 0
    },
    {
      question: "Quelle est la méthode pour supprimer le dernier élément d'une liste en Python ?",
      options: [".pop()", ".remove()", ".delete()", ".erase()"],
      answer: 0
    },
    {
      question: "Quel est le résultat de 9 % 2 en Python ?",
      options: ["4", "0.5", "1", "9"],
      answer: 2
    }
  ];

//   ---------------------------------------------

var Question = document.querySelector("#question");
// La variable Question est l'id des questions de notre quiz
var labels = document.querySelectorAll(".label");
//c'est une liste qui contient des div chaque div a un label pour afficher les choix possibles
//et un input radio
var labelParent = labels[0].parentElement;
// le parent des div.label
var labelOptions = document.querySelectorAll(".option");
// la liste de tout les champs label de notre quiz
//<label>   ......</label> 

// Pour stocker la valeur de la réponse utilisateur

// j'écoute le le parent de tout les champs 
//s'il ya changement ? On stylise le fond du champ qui a été cliqué

labelParent.addEventListener("change", (e)=>{
        labels.forEach(function(element,  index){
         
            var input = element.lastChild.previousSibling;
            if(e.target == input){
                element.style.backgroundColor ="gray";
                userAnswer = index
            }
            else{
                element.style.backgroundColor ="";
            }
        })

})




var currentIndex = 0;
//C'est la variable qui va parcourir la liste quizpython
var currentOption = 0;
//Cette variable va parcourir les labels et remplacez par la valeur de la liste quizPython.options
var score = 0;
// Pour notez le nombre de fois eu
var submit = document.querySelector('button');
// Selcetioner notre button


//Cette fonction sera appellé a chaque click du button et va remplissez les valeurs de facon successive
function afficherLeQuiz(){

    submit.innerText="Envoyer votre réponse";
    labels.forEach((e)=>{e.style.display = "flex";})
    if (currentIndex < quizPython.length ){

        quiz = quizPython[currentIndex];
        Question.innerText = quiz.question ;

        if( typeof userAnswer!== "undefined" && userAnswer == quiz.answer){
            score +=1;
        }
        currentIndex++;

        if(currentOption < quiz.options.length){
            labelOptions.forEach(function(option){
            option.innerText = quiz.options[currentOption]
                currentOption++; }) 
        }



        currentOption = 0;


    }else{
        Question.innerText =`SCORE ${score}/${quizPython.length} 😎`;
        labels.forEach((e)=>{e.style.display = "none";})
        submit.innerText= "Fin du quiz";
        }
}






submit.addEventListener("click", afficherLeQuiz)



