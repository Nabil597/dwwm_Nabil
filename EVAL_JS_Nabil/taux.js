/* on recupère les variables nécessaires */

var capital = document.getElementById("capital");
capital.addEventListener("input", verifEntier);

var taux = document.getElementById("taux");
taux.addEventListener("input", verifTaux);

var duree = document.getElementById("duree");
duree.addEventListener("input", verifEntier);

var mensualite = document.getElementById("mensualite");
var cout = document.getElementById("cout");

/* on met des event sur chaque input afin que le calcul se fasse automatiquement à la saisie de n'importe quel input */

capital.addEventListener("input", function() { calcul (capital.value, taux.value, duree.value) } ); /* l'appel à la fonction calcul doit se faire ainsi car elle a plusieurs arguments en paramètre */
taux.addEventListener("input", function() { calcul (capital.value, taux.value, duree.value) } );
duree.addEventListener("input", function() { calcul (capital.value, taux.value, duree.value) } );

/* on met ici les event sur les deux boutons */

var reinitialiser = document.getElementById("reinitialiser");
reinitialiser.addEventListener("click", reset);

var calculer = document.getElementById("calcul");
calculer.addEventListener("click", function() { calcul (capital.value, taux.value, duree.value) } );

/* cette fonction va vider les inputs*/
function reset() {

    capital.value = "";
    taux.value = "";
    duree.value = "";
    mensualite.value = "";
    cout.value = "";
}

/* cette fonction vérifie que le nombre est bien entier et on l'utilisera ici pour le capital et la durée */
function verifEntier(event) {

    var myInput = event.target;
    var message = (myInput.parentNode).getElementsByClassName("message")[0];

    if (!Number.isInteger(parseFloat(myInput.value))) 
    {       
        message.innerHTML = "format incorrect";
        message.style.color = "red";
    }
    else {
        message.innerHTML = "";
    }
}

/* cette fonction sert uniquement pour le taux car celui-ci peut être "float" */
function verifTaux(event) {

    var myInput = event.target;
    var message = (myInput.parentNode).getElementsByClassName("message")[0];

    if (parseFloat(myInput.value) > 100) {
        message.innerHTML = "format incorrect";
        message.style.color = "red";
    }
    else {
        message.innerHTML = "";
    }
}

/* c'est cette fonction qui effectue le calcul avec tout les éléments en paramètre */
function calcul (capital, taux, duree) {
    mensualite.value = parseInt((parseInt(capital) * parseFloat(taux/12)) / (1 - Math.pow(1 + parseFloat(taux/12), - (parseInt(duree) * 12))));  /* pour obtenir le nombre de mois, il suffit de faire la durée, qui est en années, * 12 */
    cout.value = parseInt(mensualite.value * (parseInt(duree) * 12));

    if (isNaN(mensualite.value) || isNaN(cout.value))   /* ici on met des champs vides dans ces inputs afin de ne pas voir le "NaN" apparaître */
    {
        mensualite.value = "";
        cout.value = "";
    }
}