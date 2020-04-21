var x = prompt("Entrez un nombre");
x = parseInt(x);
var n = prompt("Entrez le nombre de multiples que vous voulez : ");
n = parseInt(n);

for (i=0; i<n; i++)
{
    var res = (i+1) * x;
    document.write("<br>" + (i+1) + " * " + x + " = " + res);
}