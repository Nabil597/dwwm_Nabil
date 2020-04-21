function deplace(dleft, dtop) {
    var carre = document.getElementById("carre");
    var styleCarre = window.getComputedStyle(carre, null);

    var topActuel = styleCarre.top;
    var leftActuel = styleCarre.left;

    carre.style.top = parseInt(topActuel) + dtop + "px";
    carre.style.left = parseInt(leftActuel) + dleft + "px";
}

document.getElementById("up").addEventListener("click", function() { deplace(0, -5); });
document.getElementById("left").addEventListener("click", function() { deplace(-5, 0); });
document.getElementById("down").addEventListener("click", function() { deplace(0, 5); });
document.getElementById("right").addEventListener("click", function() { deplace(5, 0); });