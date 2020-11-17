
// Zone de déclaration des variable globale
let reponse;        // pour stocker la réponse de l'utilisateur
let resultat = 0;   // pour stocker el résultat de l'opération
let input = document.getElementById("myinput"); // représente l'élément qui contient la réponse de l'utilisateur
let score = 0;      // Pour comptabiliser le nombre de réponses justes 
let counter = 60;   // Le nombre de seconde dont dispose l'utilisateur pendant la partie
let operator;       // L'opérateur + ou -  pour l'opération en cours


// On écoute l'événement "keyup" qui est déclenché lorsque l'on a fini d'appuyer sur une touche
input.addEventListener("keyup",function(chiffres){
    if(chiffres.keyCode == 13){ // keycode == 13 correspond à la touche entrée
        chiffres.preventDefault(); // on évite que l'évènement se propage ailleurs et puisse être intercepté ailleurs
        document.getElementById("mybutton").click(); // on simule le click
    }
} );


/**
 * 
 * Sélectionne le texte de l'input pour pouvoir écrire directement sans avoir à cliquer dessus et effacer l'ancienne valeur.  
 * Appelée depuis le click sur #mybutton
 * 
 */
function selected(){
    // Pour pouvoir écrire directement sans avoir à cliquer sur l'input 
    input.setSelectionRange(0, input.value.length); // TODO : comprendre !!!!
}


/**
 * 
 * Fonction principale qui teste le nombre entrée et qui initialise l'opération suivante si le nombre est correct. 
 * 
 * Appelée depuis le click sur #mybutton
 * 
 */
function chiffres(){
        // on récupère une valeur entre 0 et 1 pour utiliser plus tard afin de déterminer quel opérateur choisir (+ ou -)
        operator = Math.floor(Math.random()*2); 
        console.log(operator); // debug de la valeur

        

        reponse = document.getElementById("myinput").value; // on récupère ce qu'a tapé l'utilisateur
        // console.log(resultat);
        // console.log(reponse);

        if(resultat != reponse ){ // on teste si la réponse de l'utilisateur est différente du résultat => perdu
            alert('Votre score est ' + score); // on affiche son score
                    //counter = 60;
                    //score = 0;
                    document.location.reload(true); // On recharge le document => on repart à 0, tout sera réinitialisé
                }
        

        else{ // Sinon, l'utilisateur a fait juste, il gagne une seconde. 
            counter = counter + 1;
        }

        //On récupère 2 nouveaux nombres pour la nouvelle opération (c'est un nouveau tour dans le jeu)
        chiffre1 = Math.ceil(Math.random()*20); // les nombres sont choisis entre 1 et 20 
        chiffre2 = Math.ceil(Math.random()*20);

        if(operator == 0){ // si l'opérateur vaut 0 on décide que c'est un - 
            document.getElementById("operator").innerHTML = "-" // on met à jour le HTML pour afficher l'opérateur
            resultat = chiffre1 - chiffre2; // et on effectue le calcul 

        }

        else{ // Sinon : l'opérateur est un +
            document.getElementById("operator").innerHTML = "+"   // on met à jour le HTML pour afficher l'opérateur
            resultat = chiffre1 + chiffre2;  // et on effectue le calcul 
        }
        // on met à jour le HTML pour afficher les chiffres
        document.getElementById("chiffre1").innerHTML = chiffre1;
        document.getElementById("chiffre2").innerHTML = chiffre2;

        // Ici des restes de debug .... 
        // console.log(chiffre1);
        // console.log(chiffre2);

        score = score + 1; // Comme la page n'a pas été rechargée plus haut, le joueur gagne un point de plus
        document.getElementById("score").innerHTML = score; // on met à jour le HTML pour afficher son score

        
             
}



let intervalID = null; // ???

function timer() {
    if (intervalID){
        return;
    }

    intervalID = setInterval(function timer(){ //permet l'execution d'une fonction à interval régulier. 

        counter = counter - 1; // on décrémente le temps restant
        document.getElementById('counter').innerHTML = counter; // on met à jour l'affichage du timer

        if(counter == 0){ // Oups, le temps est écoulé
            alert('Votre score est ' + score); // on affiche le score 
            //counter = 60;
            //score = 0;
            document.location.reload(true);  // On recharge le document => on repart à 0, tout sera réinitialisé
        }



    },1000); // l'intervalle d'exécution est de 1000 ms soit une seconde

};