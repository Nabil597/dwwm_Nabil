var card = document.getElementById("card");
var side = 0;

card.innerHTML = "<img src='card_off.png' alt=''>";
card.addEventListener("click", turnOver);