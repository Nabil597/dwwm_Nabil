function nbPremier(nb) {

    for (let i=2;i<nb;i++)
    {
        if (nb%i==0)
        {
            return false;
        }
    }
    return true;
}

var nombre = prompt("entrer un nombre");
if (nbPremier(parseInt(nombre)))
    document.write("ce nombre est premier")
else
    document.write("ce nombre n'est pas premier")
