function deplace(dleft, dtop) {
    var carre = document.getElementById("carre");
    var styleCarre = window.getComputedStyle(carre, null);

    var topActuel = styleCarre.top;
    var leftActuel = styleCarre.left;

    carre.style.top = parseInt(topActuel) + dtop + "px";
    carre.style.left = parseInt(leftActuel) + dleft + "px";
}

document.addEventListener("keydown", function(event) {


var event = window.event,
    keyCode = event.keyCode;


switch (keyCode) {
    case 38:
        deplace(0, -5);
        break;
    case 40:
        deplace(0, 5);
        break;
    case 37:
        deplace(-5, 0);
        break;
    case 39: 
        deplace(5, 0);
        break;
}
})

