var nb1 = prompt("entrez nombre 1"),
    nb2 = prompt("entrez nombre 2"),
    operateur=prompt("entrer l'opérateur de calcul"),
    total;

if (nb1 == "" || nb2 == "" || operateur == "")
{
     alert("pas de données");
}

nb1 = parseInt(nb1);
nb2 = parseInt(nb2);

switch (operateur) {
    case "+" :
        total = nb1 + nb2;
        break;
    case "-" :
        total = nb1 - nb2;
        break;
    case "*" :
        total = nb1 * nb2;
        break;
    case "/" :
        if (nb2 == 0) {
             alert("division impossible");
        }
        total = nb1 / nb2;
        break;
    default:
        total = "operateur non reconnu !";
        break;
    }

document.write(total);

