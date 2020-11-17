
/***
 * 
 * On gère ici la génération des opérations et le teste du résultat
 * 
 */
let operation;
let resultat; 
let chiffre1; 
let chiffre2; 

/**
 * 
 * Initialise 2 nombres et l'opérateur aléatoirement, ainsi que le résultat
 * 
 * @return Number : le résultat de la nouvelle opération. 
 */
function newOperation(){
    
    // On ve choisir les 2 chiffres aléatoirement
    chiffre1 = Math.ceil(Math.random()*20) ;
    chiffre2 = Math.ceil(Math.random()*20) ;

    // on choisi aléatoirement l'opérateur
    operator = Math.floor(Math.random()*2); 

    // On teste l'opérateur et on effectue le calcul
    if(operator == 0 ) {
        resultat = chiffre1 - chiffre2;
    } else {
        resultat = chiffre1 + chiffre2; 
    }
    // On renvoi le résultat ? 
    return resultat;
}

/**
 * 
 * Renvoi vrai si la réponse est égale au résultat. 
 * 
 * @param {number} reponse 
 * @return boolean
 */
function test(reponse) {
    return reponse == resultat; 
}



/**
 * 
 * La gestion du score et du temps (c'est à dire la gestion de la partie)
 * 
 */
let counter = 60;
let score = 0; 

function play(reponse) {
    const resultat = test(reponse);
    if(resultat) {
        score++; 
        counter++;
    } else {
        score=0;
        counter=0;
    }
    return resultat; 
}


