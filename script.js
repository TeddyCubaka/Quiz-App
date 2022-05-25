// générons les variables qui vont contenir les questions et les choix.

let tabQuestions = [
  "Dans le formulaire HTML, quel est le type d'input qui génère un bouton universel ?",
  "Quelle est la balise HTML qui permet d'incorporer un document HTML dans une page HTML ?",
  "Dans HTML, quelle est la balise qui nous permet de créer une liste à puce ?",
  "Quelle est la balise qui rend une liste à puce déroulante",
  "Quel est l'attribut qui permet d'envoyer le curseur sur la zone de l'input où il a été déclaré directement après le chargement de la page ?",
  "Quelle propriété appelle les keyfram en css",
  "Quel type d'affiche nous donne la possibilité d'afficher nos blocs en grille dans les css ?",
  "Quelle propriété CSS spécifie la largeur maximale ?",
  "Quel type d'affichage transforme un élément HTML en bloc contenu ?",
  "Quel est ce pseudo-attribut qui donne possibilté de spécifier les propriétés quand il est selectionné ?",
  "En JavaScript, le type d'objet string se comporte comme des tableau, ont une longueur et on peut facilement accéder à un élément grâce à son indice",
  "Qu'afficherai cette ligne des codes JS dans la console ? for(let i = 0; i < 21; i++){console.log(i)} ?",
  "Pour mésurer la longueur d'un tableau arr, on fait fait arr.pop() ?",
  "Les objets se comporte éxactement comme les tableaux",
  "Parmis les commandes qui indiquent au navigateur comment charger le codes JS, le quel ordonne de charger les codes JS aléatoirement et de les éxécuter seulement une fois les codes CSS et HTML chargés ?"
];


// maintenant générons les tableau qui contiendrons nos réponses.

// d'abord le tableau qui contiendra les réponses des questions sur le html.
let corrAnswers = ["button", "ifram", "ul", "details", "autofocus","animation", "grid", "max-width", "inline", "focus", "vrai","une suite de 0 à 20", "faux", "faux","async"];
let wrongAnswers = ["p", "steacky", "type", "div", "form", "input", "link", "td","table", "interface","margin", "title", "display", "absolute", "relative", "overline", "font-weigh", "style", "float", "align","userGuess", "innerText", "let", "Siuu", "equal", "plus", "name", "count", "addEventListener", "const", "let", "animé"]


// cette fonction fera appelle à trois mauvais réponses.

function war (){
  let fourWA = [];
  let y = 0;
  let a = 0;
  for (let x = 0; x < 3; x++) {
    y = Math.floor(Math.random() * wrongAnswers.length);
    a = wrongAnswers[y];
    fourWA.push(a);
  }
  return fourWA;
}

// cette fonction fera appelle à une bonne réponses et à la question aussi.

function car (){
  let oneCA = [];
  for (let x = 0; x < 1; x++) {
    let y = Math.floor(Math.random() * corrAnswers.length);
    let a = corrAnswers[y];
    let b = tabQuestions[y];
    oneCA.push(a);
    oneCA.push(b);
  }
  return oneCA;
}

// les éléments de la première page.
let nom = document.querySelector("#name");
let mail = document.querySelector("#email"); 
let subName = document.querySelector(".subName");
let subMail = document.querySelector(".subMail");

//cachons la première page et passons à l'autre

let beginBtn = document.querySelector("#begginBtn");
let header = document.querySelector("#header");
let quiz = document.querySelector("#questions");

// ajoutons les événement sur la page des résultats.

let userName = document.querySelector("#userName");
let userMail = document.querySelector("#gmail");
let userMark = document.querySelector("#iconCosh");
let userResult = document.querySelector("#points");
let finalButton = document.querySelector("#home");
let divResult = document.querySelector(".result");

// stockons les questions et les répponses dans un objet.
let ke = [];
let keys = {};


for (let i = 0; i < tabQuestions.length; i++){
    keys.question = tabQuestions[i];
    keys.vrai = corrAnswers[i];
    keys.anwers = wrongAnswers;
    ke.push(keys);
}



// clonons la div des questions

let objetOfQuestions = [];
let clone;
for (let i = 0; i < 4; i++) {
    clone = questions.cloneNode(true);
    clone.id = "questions" + i;   
    objetOfQuestions.push(clone);
}



// construisons nos questionnaires.


// ceci va avec le minuteur.
const initialMinutes = 1;
let time = initialMinutes * 60;

let thePage = [];

function addQuestion (){
  for (let i = 0; i < objetOfQuestions.length; i++) {

    // créons des variables pour stocker nos questions
    let rightAnswers = car ();
    let propositionAnswers = war ();
    propositionAnswers.push(rightAnswers[0]);
    let page = objetOfQuestions[i];
    page.children[0].textContent = ke[i].question;
    // le minuteure.
    setInterval(function timing () {
      let timerObject =  page.children[1].children[0].children[1];
      let minutes = parseInt(time / 60, 10);
      let secondes = parseInt(time % 60, 10);
      
      minutes = minutes < 10 ? "0" + minutes : minutes;
      secondes = secondes < 10 ? "0" + secondes : secondes;
      
      timerObject.innerText = `${minutes}:${secondes}`
      time = time <= 0 ? 0 : time - 1
  }, 1000);

  page.children[2].children[1].textContent = propositionAnswers[0];
  page.children[3].children[1].textContent = propositionAnswers[1];
  page.children[4].children[1].textContent = propositionAnswers[2];
  page.children[5].children[1].textContent = rightAnswers[0];

  console.log(page.children[3].children[1].textContent);
  thePage.push(page);
  }
  return thePage;

}

// créons une variable qui va stocker le return de notre fonction addQuestion.
let ourStock = addQuestion ();
// créons maintenant une fonction qui va afficher page par page de notre ourStock.

// Avant ça, cette boucle va sélectionner les boutons radios de chaque questions.

function nexter (){
  let radios = [];
  let count  = 0; 
  for (let i = 0; i < ourStock.length; i++){
    let sheet = ourStock[i];
    let next = sheet.children[6].children[1];
    header.parentNode.appendChild(ourStock[i]);
  // sélectionnons les buttons radio.
    let radio = sheet.children[2].children[0];
    let radio2 = sheet.children[3].children[0];
    let radio3 = sheet.children[4].children[0];
    let radio4 = sheet.children[5].children[0];
    radios.push(radio);
    radios.push(radio2);
    radios.push(radio3);
    radios.push(radio4);
    
    next.classList.add("opacity");
    for (let rad of radios) {
      rad.addEventListener("change", function (){
        next.classList.remove("opacity");
        next.addEventListener("click", function (){
          if ( i < 3){
            sheet.classList.add("hide");
            ourStock[i + 1].classList.remove("hide");
          }else if (i == 3){
            sheet.classList.add("hide");
            divResult.classList.remove("hide");
          }
    
        })
        // fin de l'event pour passer de page en page.
      })
    }

  }
}

// vérifions si les cases du formulaire de la première page sont vides ou pas.

beginBtn.addEventListener("click", function (){
  if (nom.value == "" && mail.value == "")
  {
    nom.classList.add("erreur");
    subName.classList.remove("hide");
    mail.classList.add("erreur");
    subMail.classList.remove("hide");
    return false;
  }else{
    header.classList.add("hide");
    header.parentNode.appendChild(ourStock[0]);
    ourStock[0].classList.remove("hide");

    nexter ();
  }
})