var nb = prompt("Entrez des nombres entiers (0 arretera la saisie)");
var somme = parseInt(nb);
var compteur = 0;

function somMoy(nb, somme, compteur)
{
while (parseInt(nb) != 0)
{
    var nb = prompt("Entrez des nombres entiers (0 arretera la saisie");
    somme = somme + parseInt(nb);
    compteur++;
}

alert("Somme = " + somme + "; Moyenne = " + somme/compteur + " ;");
}