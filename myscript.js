window.onscroll = function() {myFunction()};

var navbar = document.getElementById("nav");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}


var links = document.getElementsByClassName('table2div');
    var confirmIt = function (cbox) {
        if (!confirm('Are you sure you wish to leave the page?')) cbox.preventDefault();
    };
    for (var i=0, length = links.length; i < length; i++) {
        links[i].addEventListener('click', confirmIt, false);
    }

function showConfirm(){
  if (confirm('Do you wish to play my favorite classical composition?')) {
  play();
} else {
  txt = "Suit yourself!";
}
}

function play() {
        var audio = document.getElementById("audio");
        audio.play();
      }




var slidenr = 0;
showSlides();

function showSlides() {
  var s = document.getElementsByClassName("slides12");
  for (var i=0; i < s.length; i++){
    s[i].style.display = "none";
  }
  slidenr++;
  
  if (slidenr > s.length) {slidenr = 1}
  s[slidenr-1].style.display = "block";
  
  setTimeout(showSlides, 4500);
}
