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
  for (let x = 0; x < 4; x++) {
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



// clonons la div des questions

let objetOfQuestions = [];
let clone;
for (let i = 0; i < 15; i++) {
    clone = questions.cloneNode(true);
    clone.id = "questions" + i;  
    objetOfQuestions.push(clone);
}


                      /*

                      construisons nos questionnaires.

                      */


let thePage = [];

function addQuestion (){
  for (let i = 0; i < objetOfQuestions.length; i++) {

    // créons des variables pour stocker nos questions
    let rightAnswers = car ();
    let propositionAnswers = war ();
    let  a = Math.floor(Math.random() * 4);
    propositionAnswers[a] = rightAnswers[0];

    let page = objetOfQuestions[i];
    page.children[0].textContent = rightAnswers[1];

  page.children[2].children[1].textContent = propositionAnswers[0];
  page.children[3].children[1].textContent = propositionAnswers[1];
  page.children[4].children[1].textContent = propositionAnswers[2];
  page.children[5].children[1].textContent = propositionAnswers[3];
  
  thePage.push(page);
}
return thePage;

}

// créons une variable qui va stocker le return de notre fonction addQuestion.

let ourStock = addQuestion ();

// ce code affichera un "Terminer" à la place de "suivant" au dernier bouton.
let last = ourStock[14].children[6].children[1];
last.value = "Terminer";

// créons maintenant une fonction qui va afficher page par page de notre ourStock.

function nexter (){
  let count  = 0;
  // Avant ça, cette boucle va sélectionner les boutons radios de chaque questions.

  for (let i = 0; i < ourStock.length; i++){
    let radios = [];
    let sheet = ourStock[i];
    let next = sheet.children[6].children[1];
    let exiteButton = sheet.children[6].children[0];

    // sélectionnons les buttons radio.
    let radio = sheet.children[2].children[0];
    let radio2 = sheet.children[3].children[0];
    let radio3 = sheet.children[4].children[0];
    let radio4 = sheet.children[5].children[0];
    radios.push(radio);
    radios.push(radio2);
    radios.push(radio3);
    radios.push(radio4);

    // ce code va gérer le compteur des questions.

    let compteur = sheet.children[1].children[0].children[0];
    let a = i + 1;
    compteur.innerText = "Question" + " " + a + "/15";


              // le minuteure.

        // ceci va avec le minuteur.
    let newTimer = sheet.children[1].children[0].children[1];
    let t = 60;
    let  = setInterval(function timer () {
      while (sheet.classList.contains("hide") == false) {
        t -= 1;
        newTimer.innerHTML = t;
        if (t == -1) {
          while (i < ourStock.length-1){
            newTimer.innerHTML = "0";
            sheet.classList.add("hide");
            ourStock[i + 1].classList.remove("hide");
            for (let rad of radios){
              if (rad.checked == true){
                  let index = radios.indexOf(rad) + 2;
                  let a = sheet.children[index].children[1].textContent;
                  let y = corrAnswers.indexOf(a);
                  if (y !== -1){count++;};
              }
            }
            break;
          }
          if (i == ourStock.length-1){
            sheet.classList.add("hide");
            divResult.classList.remove("hide");
            
            // ceci affechera le resultat du joueur.

            userName.innerText = nom.value;
            userMail.innerText = mail.value;
            userResult.innerText = count + "/15";
            if (count < 8){
                userMark.src = "cocheRouge.png";
            }else{
                userMark.src = "cocheVerte.png";
            }
            finalButton.onclick  = function(){window.location.reload();}
          }
        }
        break;
      }
    }, 1000);



    next.classList.add("opacity");
    for (let rad of radios) {
      rad.addEventListener("change", function (e){
        next.classList.remove("opacity");
        
        let index = radios.indexOf(rad) + 2;

        
        sheet.children[index].style = "border: 2px solid #009a40";
        next.addEventListener("click", function (){
          let a = sheet.children[index].children[1].textContent;
          let y = corrAnswers.indexOf(a);
          if (y !== -1){count++;};

          if ( i < 14){
          sheet.classList.add("hide");
          ourStock[i + 1].classList.remove("hide");
          
          }else if (i == 14){
            sheet.classList.add("hide");
            divResult.classList.remove("hide");
            
            // ceci affechera le resultat du joueur.

            userName.innerText = nom.value;
            userMail.innerText = mail.value;
            userResult.innerText = count + "/15";
            if (count < 8){
                userMark.src = "cocheRouge.png";
            }else{
                userMark.src = "cocheVerte.png";
            }
            finalButton.onclick  = function(){window.location.reload();}
          
          }
          
              })
        // fin de l'event pour passer de page en page.
        })
      }
      exiteButton.addEventListener("click", function (){

        for (let rad of radios){
          if (rad.checked == true){
              let index = radios.indexOf(rad) + 2;
              let a = sheet.children[index].children[1].textContent;
              let y = corrAnswers.indexOf(a);
              if (y !== -1){count++;};
          }
        }

        sheet.classList.add("hide");
        divResult.classList.remove("hide");
        
        // ceci affechera le resultat du joueur.

        userName.innerText = nom.value;
        userMail.innerText = mail.value;
        userResult.innerText = count + "/15";
        if (count < 8){
            userMark.src = "cocheRouge.png";
        }else{
            userMark.src = "cocheVerte.png";
        }
        finalButton.onclick  = function(){window.location.reload();}
      })



    header.parentNode.appendChild(ourStock[i]);


  }
}

// vérifions si les cases du formulaire de la première page sont vides ou pas.

beginBtn.addEventListener("click", function (){
  if (nom.value == "" && nom.value.length <= 1)
  {
    nom.classList.add("erreur");
    subName.classList.remove("hide");
  }else if (mail.value == ""){
    mail.classList.add("erreur");
    subMail.classList.remove("hide");
  }else{
    header.classList.add("hide");
    header.parentNode.appendChild(ourStock[0]);
    ourStock[0].classList.remove("hide");

    nexter ();

  }
})