var anneeNaissance = prompt("Entrez votre age");
var age = (new Date()).getFullYear()-anneeNaissance
if (age>17)
{
    alert("majeur")
}
else {
    alert("mineur")
}