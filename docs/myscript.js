
//confirm popup button for pressing social media links
//asks if user wants to leave the page before it proceeds with linking them to that selected page

var links = document.getElementsByClassName('table2div');

var confirmIt = function (cbox){
        if (!confirm('Are you sure you wish to leave the page?')) 
        	cbox.preventDefault();
    		};

    for(var i=0, length=links.length; i<length; i++){
        links[i].addEventListener('click', confirmIt, false);
    		}

//asks user if they wish for a song to play as they scroll
//source can be edited for a different/local audio if error occurs
function showConfirm(){
  if(confirm('Do you wish to play my favorite classical composition?')){
	playAudio();
		}

  else{
  	txt="Suit yourself!";
		}
	}

function playAudio(){
        var pjesma=document.getElementById("audio");
        pjesma.playAudio();
      	}

//make the navbar fixed to the top of the page as the user scrolls
//solely to make navbar more useful so they dont have to scroll all the way 
//back up to top to use it
window.onscroll = function() {toStick()};

var tempnav = document.getElementById("nav");
var stnav = tempnav.offsetTop;

function toStick(){
  if (window.pageYOffset >= stnav) {
    tempnav.classList.add("stnav")
  	}

  else{
    tempnav.classList.remove("stnav");
  	}
}

//picture gallery embed
//automated with 4 seconds in between every pictures showing
//added fade animation i found online because it looks a bit better
//but thats in css (webkit)
var slidenr = 0;

showSlides();

function showSlides() {
  var s = document.getElementsByClassName("slides12");
  for (var i=0; i<s.length; i++){
    s[i].style.display = "none";
  }
  slidenr++;
  
  if (slidenr>s.length){slidenr=1}
  
  s[slidenr-1].style.display = "block";
  
  setTimeout(showSlides, 4000);
}
