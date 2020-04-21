function deplace(dx, dy) {
    var deplacement_ok = true;
    var deplacement_coupe = true;
    var carre = document.getElementById("carre");
    var styleCarre = window.getComputedStyle(carre, null);
    var t = parseInt(styleCarre.top);
    var l = parseInt(styleCarre.left);
    var w = parseInt(styleCarre.width);
    var h = parseInt(styleCarre.height);
    
    
    var coupe = document.getElementById("coupe");
    var styleCoupe = window.getComputedStyle(coupe, null);
    var tc = parseInt(styleCoupe.top);
    var lc = parseInt(styleCoupe.left);
    var wc = parseInt(styleCoupe.width);
    var hc = parseInt(styleCoupe.height);
    deplacement_coupe = deplacement_coupe && !(depl_ok(tc, lc, wc, hc, t + dy, l + dx, w, h));
    if (deplacement_coupe) {
        coupe.src = "src ='coupe.png'";

    }
    else { coupe.src = "src='point.png'";};

    var listeObst = document.querySelectorAll('.obstacle');    
    listeObst.forEach(function (elt) {
    var styleObst = window.getComputedStyle(elt, null);   
    var tob = parseInt(styleObst.top);
    var lob = parseInt(styleObst.left);
    var wob = parseInt(styleObst.width);
    var hob = parseInt(styleObst.height);
    deplacement_ok = deplacement_ok && depl_ok(tob, lob, wob, hob, t + dy, l + dx, w, h)
    });
    if (deplacement_ok) {
        carre.style.top = t + dy + 'px';
        carre.style.left = l + dx + 'px';
    }
}

function depl_ok(tob, lob, wob, hob, t, l, w, h) {
   if (l < lob + wob && l + w > lob && t < tob + hob && t + h > tob) {
        return false
    }
    return true;
}

// function depl_ok2(tob, lob, wob, hob, t, l, w, h) {
//     if (l < lob + wob && l + w > lob && t < tob + hob && t + h > tob) {
//          return true
//      }
//      return false;
//  }

document.addEventListener("keydown",function(event) {
    var event = event || window.event, // pour la compatibilite avec tous les navigateurs
        keyCode = event.keyCode;
   var speed = 25;
    // On détecte l'événement puis selon la fleche, on appelle deplace
    switch (keyCode) {
        case 38:
            deplace(0, -speed);
            break;
        case 40:
            deplace(0, speed);
            break;
        case 37:
            deplace(-speed, 0);
            break;
        case 39:
            deplace(speed, 0);
            break;
        case 36:
            deplace(-speed, -speed);
            break;
        case 35:
            deplace(-speed, speed);
            break;
        case 33:
            deplace(speed, -speed);
            break;
        case 34:
            deplace(speed, speed);
            break;
    }
});