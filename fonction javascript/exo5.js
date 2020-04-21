function strtok(str1, str2, n)
{
    var tab = str1.split(str2);
    return (tab[n - 1]);
}

var str = "nabil;amichi;grande synthe";
document.write(strtok(str,";",3));