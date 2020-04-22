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

// recup des variables
var body = document.getElementsByTagName("body")[0];
var inputs = document.getElementsByTagName("input");

// function qui change la couleur de body lors du click
    var rouge = document.getElementsByClassName("btnred")[0];
    var vert = document.getElementsByClassName("btngreen")[0];
    var bleu = document.getElementsByClassName("btnblue")[0];

    
function changeColor(color){
    
    switch (color){
        
        case "red":
            body.style.backgroundColor = "red";
        break;

        case "green":
            body.style.backgroundColor = "green";
        break;

        case "blue":
            body.style.backgroundColor = "lightblue";
        break;
    }
    createCookie("rgb",body.style.backgroundColor, 3);
}
rouge.addEventListener("click",function(){changeColor("red");});
vert.addEventListener("click",function(){changeColor("green");});
bleu.addEventListener("click",function(){changeColor("blue");});

for (let i = 0; i<3; i++) {
    inputs[i].addEventListener("mouseout", function() {
        
            body.style.backgroundColor = "rgb(" + inputs[0].value + "," + inputs[1].value + "," + inputs[2].value + ")";
            createCookie("rgb",body.style.backgroundColor, 3);
            
    });
}

var couleurs = readCookie("rgb");

if (couleurs != null)
{
    body.style.backgroundColor = couleurs;
}