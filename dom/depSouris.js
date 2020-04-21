// sur tout le document, un mouvement de souris fait appel à la fonction mouseMove
document.onmousemove = mouseMove;
// sur tout le document, une pression fait appel à catchPlayer
document.onmousedown = catchPlayer;
// sur tout le document, un relachement fait appel à uncatchPlayer
document.onmouseup = uncatchPlayer;

// si on attrape le joueur, on met le flag sur "true"
function catchPlayer(event) {
    caught = true;
}

// si on relache le joueur, on met le flag sur "false"
function uncatchPlayer(event) {
    caught = false;
}

// la fonction qui déplacement le joueur
function mouseMove(event) {
    if ((caught === true) && (event.clientX<limitRightBottom) && (event.clientY<limitRightBottom)  ){ // on vérifie si le flag est sur "true" donc qu'on a bien cliqué sur l'objet, si oui on peut modifier sa position
        player.style.left = event.clientX + 'px';
        player.style.top = event.clientY  + 'px';
    }
}