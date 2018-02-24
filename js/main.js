const nav = document.getElementById('nav');


//sticky nav
window.onscroll = function() {myFunction()};

let sticky = nav.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    nav.classList.add("sticky")
    nav.style.maxWidth = "1200px"
    nav.style.marginTop = 0
  } else {
    nav.classList.remove("sticky")
    nav.style.marginTop = "1em"


  }
}
