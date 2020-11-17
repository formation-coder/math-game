/**
 * 
 * Ce script va mettre à jour les éléments HTML en fonction du jeu
 * 
 */

 input = document.getElementById("myinput");
// On écoute l'événement "keyup" qui est déclenché lorsque l'on a fini d'appuyer sur une touche
input.addEventListener("keyup",function(chiffres){
    if(chiffres.keyCode == 13){ // keycode == 13 correspond la touche entrée
        chiffres.preventDefault(); // on évite que l'évènement se propage ailleurs et puisse être intercepté ailleurs
        document.getElementById("mybutton").click(); // on simule le click
    }
} );


/**
 * 
 *  Pour pouvoir écrire directement sans avoir à cliquer sur l'input 
 * 
 * Appelée depuis le click sur #mybutton
 * 
 */
function selected(){
    // Pour pouvoir écrire directement sans avoir à cliquer sur l'input 
    input.setSelectionRange(0, input.value.length); // TODO : comprendre !!!!
}

 /**
 * 
 * La gestion du timer 
 * 
 */
let intervalID = null; // ???

function timer() {
    if (intervalID){
        return;
    }
    intervalID = setInterval(function timer(){ //permet l'execution d'une fonction à interval régulier. 

        counter = counter - 1; // on décrémente le temps restant
        document.getElementById('counter').innerHTML = counter; // on met à jour l'affichage du timer

        if(counter == 0){ // Oups, le temps est écoulé
            gameOver();
        }
    },1000); // l'intervalle d'exécution est de 1000 ms soit une seconde
};

function gameOver() {
    alert('Votre score est ' + score); // on affiche le score 
    document.location.reload(true);  // On recharge le document => on repart à 0, tout sera réinitialisé
}

displayNewOpertation();

/**
 * 
 * Fonction appelée quand le joueur joue, c'est à dire quand il clique (ou appuye sur la touche entrée)
 * 
 */
function round() {
    // On récupère la saisie de l'utilisateur
    saisie = document.getElementById("myinput").value;
    //On teste sa saisie 
    resultat = play(saisie); 
    //S'il a perdu, on recharge la page
    if(!resultat) {
        gameOver();
    }
    // et affiche une nouvelle opération
    displayNewOpertation(); 
}

/**
 * 
 * 
 * 
 */
function displayNewOpertation() {

    newOperation(); 
    document.getElementById("chiffre1").innerText = chiffre1;
    document.getElementById("chiffre2").innerText = chiffre2;
    document.getElementById("operator").innerText = operator?"+":"-";
    //on affiche le score, le timer 
    document.getElementById("score").innerText = score;
    document.getElementById("counter").innerText = counter;
}