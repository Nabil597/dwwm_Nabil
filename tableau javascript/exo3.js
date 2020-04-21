function afficheTab(tab)
{
    for (let i=0; i<tab.length; i++ )
    {
        document.write("   " + tab[i]);
    }
    document.write("<br>");
}

function trouverMot(mot, tab)
{
    for (let i = 0; i<tab.length; i++)
    {
        if (tab[i]==mot)
        {
            var lim = i;
            for (i = lim; i<tab.length; i++)
            {
                tab[i] = "";
                /*tab[i+1] = tab[i];*/

                if (tab[i]=="")
                {
                    tab[i] = tab[i+1];
                }

                if (tab[i]==undefined)
                {
                    tab[i] = "";
                }
            }

        }
    }
    return tab;
}


var tab = ["baptiste","martine","alison","maxence","nabil","jason","nicolas","yousra","vessilya","mathys","alan","benjamin","loic","nathanael","mederic","ronaldo","leo","neymar","rivaldo","devdude"];
do { 
    var mot = prompt("Entrez un prénom : ");
    tab = trouverMot(mot, tab); 
    /*triBulles(tab);*/
    afficheTab(tab);
    again = confirm("Voulez-vous continuer ?");
    // afficheTab(tab);
} while(again);
afficheTab(tab);