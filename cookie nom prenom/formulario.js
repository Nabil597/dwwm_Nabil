var nom = document.getElementById("nom");
nom.addEventListener("input", verif);

var prenom = document.getElementById("prenom");
prenom.addEventListener("input", verif);


var valeur = readCookie("visite");
var name = readCookie("nom");
var surname = readCookie("prenom");
if (valeur == null)
{
    createCookie("visite", 1, 3);
}
else if (valeur == 1)
{
    nom.value = name;
    prenom.value = surname;
}

function verif(event) {
    
    var myInput = event.target;
    createCookie(myInput.id, myInput.value, 3);
    var imgVerte = (myInput.parentNode).getElementsByClassName("imgVerte")[0];
    var imgRouge = (myInput.parentNode).getElementsByClassName("imgRouge")[0];
    var message = (myInput.parentNode).getElementsByClassName("message")[0];

    if (myInput.value=="") {

        imgVerte.style.visibility = "hidden";
        imgRouge.style.visibility = "hidden";
        message.innerHTML = "champ manquant";
    } else if (!myInput.checkValidity()) {

        imgVerte.style.visibility = "hidden";
        imgRouge.style.visibility = "visible";
        message.innerHTML = "format incorrect";
    } else {
        imgVerte.style.visibility = "visible";
        imgRouge.style.visibility = "hidden";
        message.innerHTML = "";
    }
}

function createCookie(name, value, days) {
    // permet de créer un cookie
    if (days) {
        // si le nombre de jour est renseigné, on le transforme en millieme de seconde
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        var expires = "expires=" + date.toGMTString();
    }
    else var expires = "";
    //le cookie doit contenir clé=valeur;expires=temps;path=nomDomaine
    document.cookie = name + "=" + value + "; " + expires + "; path=/";
}

function readCookie(name) {
    // on récupère tous les cookies du site en une fois, séparé par ;
    // on range dans un tableau chaque cookie
    var listeCookies = document.cookie.split('; ');
    for (let i = 0; i < listeCookies.length; i++) {
        // pour chaque cookie, on sépare en tableau la clé et la valeur
        var unCookie = listeCookies[i].split("=");
        // si la clé correspond au cookie cherché, on renvoi la valeur
        if (unCookie[0] == name) return unCookie[1];
    }
    return null;
}

function eraseCookie(name) {
    // pour supprimer un cookie, on le périme
    createCookie(name, "", -1);
}


