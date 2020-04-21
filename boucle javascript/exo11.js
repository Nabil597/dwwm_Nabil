/*nb magique */

do {
    var reponse = parseInt(Math.random() * 100);
    console.log("La réponse est " + reponse);

    var nb = prompt("devinez le chiffre : ");

    while (nb != reponse) {
        if (nb < reponse) {
            alert("trop petit");
            console.log(nb + " est trop petit");
        }
        else {
            alert("trop grand");
            console.log(nb + " est trop grand");
        }

        console.log("Dernier chiffre donné : " + nb);
        nb = prompt("devinez le chiffre : ");
    }

    alert("Bien joué");
    replay = confirm("veux-tu rejouer ?");
} while (replay);

/* nb magique inversé */

var nb = null;
var limiteMax = 100;
var limiteMin = 1;

do {
    nb = parseInt(Math.random() + (limiteMax - limiteMin) + limiteMin);
    alert("L'ordinateur propose " + nb);
    console.log("L'ordinateur propose " + nb);

    choix = prompt("Plus petit (-), plus grand (+) ou correct (=) ?");

    if (choix == "+") {
        limiteMin = nb;
    }
    else if (choix == "-") {
        limiteMax = nb;
    }

    console.log("L'ordinateur va chercher entre " + limiteMin + " et " + limiteMax);
} while (choix != "=");

alert("L'ordinateur a trouvé le bon numéro !");