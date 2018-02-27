const nav = document.getElementById('nav');
const intro = document.querySelector('.intro');
const overlay = document.querySelector('#overlay');
const modalCard = document.getElementsByClassName('modal-card');
const card = document.getElementsByClassName('card');
const leftArrow = document.getElementById('left-arrow');
const rightArrow = document.getElementById('right-arrow');
let counter = 0;
//sticky nav
window.onscroll = function() {myFunction()};

let sticky = nav.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    nav.classList.add("sticky")
    nav.style.maxWidth = "1200px"
    nav.style.marginTop = 0
    intro.style.marginTop = "6em"


  } else {
    nav.classList.remove("sticky")
    intro.style.marginTop = "2em"
    nav.style.marginTop = "1em"

  }
}
//end of sticky nav


//Modal Overlay appear on click

for (let i=0; i<card.length; i+=1) {
  card[i].addEventListener('click', ()=> {
    counter += i;
    console.log(counter);
    overlay.style.display = "flex";
    modalCard[counter].style.display = 'flex';

    if (modalCard[counter].previousElementSibling !== null) {
      modalCard[counter].previousElementSibling.style.display = 'flex';
      modalCard[counter].previousElementSibling.style.transform = 'translate(-175%, -50%)';
    }

    if (modalCard[counter].nextElementSibling !== null) {
      modalCard[counter].nextElementSibling.style.display = 'flex';
      modalCard[counter].nextElementSibling.style.transform = 'translate(75%, -50%)';
    }


      if (counter === 0) {
        leftArrow.style.opacity = 0;
        leftArrow.style.cursor = 'default';
      } else {
        leftArrow.style.opacity = 1;
        leftArrow.style.cursor = 'pointer';

        leftArrow.addEventListener('click', ()=> {
          counter += -1;
          modalCard[counter + 1].nextElementSibling.style.display = 'none'; //previous right slide disappears
          modalCard[counter + 1].style.transform = 'translate(75%, -50%)' //current slide move right
          modalCard[counter].style.transform = 'translate(-50%, -50%)'; //left slide move to center
          modalCard[counter].previousElementSibling.style.display = 'flex'; //display new left slide
          modalCard[counter].previousElementSibling.style.transform = 'translate(-175%, -50%)'; //set new left slide to left position

          if (counter === 0) {
            leftArrow.style.opacity = 0;

          }
        });

      }

      if (counter === 11) {
        rightArrow.style.opacity = 0;
        rightArrow.style.cursor = 'default';
      } else {
        rightArrow.style.opacity = 1;
        rightArrow.style.cursor = 'pointer';

        rightArrow.addEventListener('click', ()=> {
          counter += 1;
          modalCard[counter - 1].previousElementSibling.style.display = 'none'; //previous left slide disappears
          modalCard[counter - 1].style.transform = 'translate(-175%, -50%)' //current slide move left
          modalCard[counter].style.transform = 'translate(-50%, -50%)'; //right slide move to center
          modalCard[counter].nextElementSibling.style.display = 'flex'; //display new right slide
          modalCard[counter].nextElementSibling.style.transform = 'translate(75%, -50%)'; //set new right slide to right position

          if (counter === 11) {
            rightArrow.style.opacity = 0;

          }
        });



      }



      // if (modalCard[counter] === modalCard[0]) {
      //   leftArrow.style.opacity = 0;
      //   leftArrow.style.cursor = 'default';
      // }



      // leftArrow.addEventListener('click', ()=> {
      //   if (modalCard[counter].nextElementSibling !== null){
      //       modalCard[counter].nextElementSibling.style.display = 'none';
      //   }
      //   if (counter > 0) {
      //   counter += -1;
      //   console.log(counter);
      //   modalCard[counter + 1].style.transform = 'translate(115%, -50%)';
      //   modalCard[counter + 1].previousElementSibling.style.transform = 'translate(-50%, -50%)';
      //   modalCard[counter].previousElementSibling.style.display = 'flex';
      //   modalCard[counter].previousElementSibling.style.transform = 'translate(-215%, -50%)';
      //
      //   if (counter < 1) {
      //     console.log('hello');
      //   }
      //   }
      // });









});
}/////End of For Loop






//-------Modal-Card display and functionality=----
/////arrow functionality





//end of Modal Overlay
// for (let i=0; i<modalCard.length; i+=1) {
//   modalCard[i].style.display ="flex";
// }
