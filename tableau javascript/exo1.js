function creerTab(nb)
{
    tab = new Array(nb);
    return tab;
}

function remplissageTab(tab)
{
    for (let i=0; i<tab.length; i++)
    {
        var contenuTab = prompt("Entrez le contenu n° " + (i+1));
        tab[i] = contenuTab;
    }
    return tab;
}

function afficheTab(tab)
{
    for (let i=0; i<tab.length; i++ )
    {
        document.write("<br>" + tab[i]);
    }
}

var nb = prompt("Entrez la taille de votre tableau : ");
var tableau = creerTab(parseInt(nb));
tableau = remplissageTab(tableau);
tableau = afficheTab(tableau);

