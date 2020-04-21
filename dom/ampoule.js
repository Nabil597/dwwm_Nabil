function changeImage() {
    var image = document.getElementById('myImage');
    if (image.src.match("ampoule2")) {
      image.src = "../ampoule1.gif";
    } else {
      image.src = "../ampoule2.gif";
    }
  }