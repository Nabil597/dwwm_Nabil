var capital = document.getElementById("capital");
capital.addEventListener("input", verifEntier);

var taux = document.getElementById("taux");
taux.addEventListener("input", verifTaux);

var duree = document.getElementById("duree");
duree.addEventListener("input", verifEntier);

var mensualite = document.getElementById("mensualite");
var cout = document.getElementById("cout");

capital.addEventListener("input", function() { calcul (capital.value, taux.value, duree.value) } );
taux.addEventListener("input", function() { calcul (capital.value, taux.value, duree.value) } );
duree.addEventListener("input", function() { calcul (capital.value, taux.value, duree.value) } );

var reinitialiser = document.getElementById("reinitialiser");
reinitialiser.addEventListener("click", reset);

var calculer = document.getElementById("calcul");
calculer.addEventListener("click", function() { calcul (capital.value, taux.value, duree.value) } );

function reset() {

    capital.value = "";
    taux.value = "";
    duree.value = "";
    mensualite.value = "";
    cout.value = "";
}


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

function calcul (capital, taux, duree) {
    mensualite.value = parseInt((parseInt(capital) * parseFloat(taux/12)) / (1 - Math.pow(1 + parseFloat(taux/12), - (parseInt(duree) * 12))));
    cout.value = parseInt(mensualite.value * (parseInt(duree) * 12));

    if (isNaN(mensualite.value) || isNaN(cout.value))
    {
        mensualite.value = "";
        cout.value = "";
    }
}