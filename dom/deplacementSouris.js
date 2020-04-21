var mouse_down = false;

var carre = document.getElementById("carre");
carre.addEventListener("mousedown", on_mouse_down_carre);

function on_mouse_down_carre(event) {
    mouse_down = true;
}

function on_mouse_up(event) {
    mouse_down = false;
}

document.addEventListener("mousemove", on_mouse_move);
document.addEventListener("mouseup", on_mouse_up);

function on_mouse_move(event) {
    if (mouse_down === true) {
        document.querySelector("#carre").style.left = event.ClientX+"px";
        document.querySelector("#carre").style.top = event.ClientY+"px";
    }
}