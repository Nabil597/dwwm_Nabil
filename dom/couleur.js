function changerCouleur(obj) {

    var color = obj.style.color;

    // if (obj == document.getElementsByTagName("p"))
    // {
    switch(color){
        case "black" : obj.style.color = "red";
        break;

        case "red" : obj.style.color = "black";
        break;

        default : obj.style.color = "red";
        break;
    }

    // if (obj == document.getElementsByTagName("h1") || obj == document.getElementsByTagName("h2") || obj == document.getElementsByTagName("h3")) 
    // {
    // switch(color){
    //     case "black" : obj.style.color = "red";
    //     break;

    //     case "red" : obj.style.color = "yellow";
    //     break;

    //     case "yellow" : obj.style.color = "black";
    //     break;

    //     default : obj.style.color = "red";
    //     break;
    // }}
}

var paragraphe = document.getElementsByTagName("p");

for (let i = 0; i < paragraphe.length; i++)
{
    paragraphe[i].addEventListener("click", function(e){

        changerCouleur(e.target);
    })
}

// var titre1 = document.getElementsByTagName("h1");

// for (let i = 0; i < titre1.length; i++)
// {
//     titre1[i].addEventListener("click", function(e){

//         changerCouleur(e.target);
//     })
// }

// var titre2 = document.getElementsByTagName("h2");

// for (let i = 0; i < titre2.length; i++)
// {
//     titre2[i].addEventListener("click", function(e){

//         changerCouleur(e.target);
//     })
// }

// var titre3 = document.getElementsByTagName("h3");

// for (let i = 0; i < titre3.length; i++)
// {
//     titre3[i].addEventListener("click", function(e){

//         changerCouleur(e.target);
//     })
// }