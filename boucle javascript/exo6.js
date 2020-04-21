var nb = prompt("Entrez des nombres entiers (0 arretera la saisie)");
var somme = parseInt(nb);
var compteur = 0;
var min = parseInt(nb);
var max = parseInt(nb);

while (parseInt(nb) != 0)
{
    var nb = prompt("Entrez des nombres entiers (0 arretera la saisie");
    somme = somme + parseInt(nb);
    compteur++;

    if (parseInt(nb) < min && parseInt(nb) != 0)
    {
        min = parseInt(nb);
    }
    if (parseInt(nb) > max)
    {
        max = parseInt(nb);
    }
}

alert("Somme = " + somme + "; Moyenne = " + somme/compteur + " ; Max : " + max + "; Min : " + min + ";");