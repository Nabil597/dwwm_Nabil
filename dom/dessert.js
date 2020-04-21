function ajoutDessert(nom) {
    if (nom != "") {
        liste.innerHTML += "<li>" + nom + "</li>";
        eventSuppression();
    }
}

function supprimerDessert(e) {
    liste = document.getElementById("liste");
    liste.removeChild(e.target);
}


function eventSuppression() {
    var eltListe = document.getElementsByTagName("li");

    for (let i =0; i< eltListe.length; i++)
    {
        eltListe[i].addEventListener("click", supprimerDessert);
    }
}

var liste = document.getElementById("liste");

document.getElementById("ajoutDessert").addEventListener("click", function () {
    ajoutDessert(prompt("Quel dessert voulez-vous ajouter ?"));
});

eventSuppression();