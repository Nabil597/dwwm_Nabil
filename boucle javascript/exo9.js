var age = prompt("Entrez un âge (saisie d'un centenaire arretera le comptage): ");
age = parseInt(age);
var jeune = 0;
var moyen = 0;
var vieu = 0;

while (age<100)
{
    if (age<20)
    { 
        jeune ++;
    }
    else if (age<41)
    { 
        moyen ++;
    }
    else if (age>41 && age<100)
    { 
        vieu ++;
    }

    var age = prompt("Entrez un âge (saisie d'un centenaire arretera le comptage): ");
    age = parseInt(age);
}

vieu++;
document.write("Le nombre de jeunes est de " +jeune+ " et le nombre de moyens est de " +moyen+ " et le nombre de vieux est de " +vieu+ " .");