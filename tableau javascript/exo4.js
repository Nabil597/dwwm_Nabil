function triBulles(tab)
{
    var flag = 1;
    var tour = 1;

    while (flag = 1)
    {
        flag = 0;

        for (let i=1; i<(tab.length - tour); i++)
        {
            if (tab[i] > tab[i+1])
            {
                var temp = tab[i];
                tab[i] = tab[i+1];
                tab[i+1] = temp;
                flag = 1;
            }
        }

        tour = tour + 1;
    }
    return tab;
}