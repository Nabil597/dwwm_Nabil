var participation;
var marie = prompt("Etes-vous mariés ?");
var nbEnfant = prompt("Combien d'enfants avez-vous ?");

nbEnfant = parseInt(nbEnfant);

if (marie == "oui")
{
    if (nbEnfant != 0)
    {
        participation = 25 + (nbEnfant * 10);
        console.log(participation);
    }
    else
    {
        participation = 25;
    }
}
else
{
    if (nbEnfant != 0)
    {
        participation = 20 + (nbEnfant * 10);
    }
    else {
        participation = 20;
    }
}

if (participation > 50)
{
    participation = 50;
}

alert(participation);