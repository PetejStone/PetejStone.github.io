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

for (let i=0; i<card.length; i+=1) { //loops through card list
  card[i].addEventListener('click', (e)=> {
    counter += i;  //counter is set to the index value of the card clicked
    console.log(counter);
    overlay.style.display = "flex";   //when clicked, overlay modal appears
    modalCard[counter].style.display = 'flex'; //--

    if (modalCard[counter].previousElementSibling !== null)  { //if a previous sibling exists, display it offscreen to the left
      modalCard[counter].previousElementSibling.style.display = 'flex';
      modalCard[counter].previousElementSibling.style.transform = 'translate(-190%, -50%)'; //left screen placement
        if (modalCard[counter].previousElementSibling.previousElementSibling !==null) {
          modalCard[counter].previousElementSibling.previousElementSibling.style.display = 'flex';
          modalCard[counter].previousElementSibling.previousElementSibling.style.transform = 'translate(-290%, -50%)'; //right screen p
      }
    }


    if (modalCard[counter].nextElementSibling !== null ) { //if a next sibling exists, display it offscreen to the right
      modalCard[counter].nextElementSibling.style.display = 'flex';
      modalCard[counter].nextElementSibling.style.transform = 'translate(90%, -50%)'; //right screen placement
      if (modalCard[counter].nextElementSibling.nextElementSibling !==null) {
        modalCard[counter].nextElementSibling.nextElementSibling.style.display = 'flex';
        modalCard[counter].nextElementSibling.nextElementSibling.style.transform = 'translate(190%, -50%)'; //right screen p
      }
    }




///////ARROW FUNCTIONALITY///////
    if (i===0) {
      leftArrow.className = 'disabled'; //if the card clicked is the first child, set left arrow to disabled
    }

    if (i === card.length -1) {
      rightArrow.className = 'disabled'; // if the card clicked is the last child, set right arrow to disabled
    }


        leftArrow.addEventListener('click', ()=> {
          rightArrow.className = 'active'; //when the left arrow is clicked, reactivate the right button
          counter += -1;
          console.log(counter);
          if (counter === 0) {
            leftArrow.className = 'disabled'; //if the index value is 0 (the first element), then reset the left arrow to disabled
          }
          modalCard[counter + 1].nextElementSibling ? modalCard[counter + 1].nextElementSibling.style.transform = 'translate(190%, -50%)' : null; //previous right rotates off screen to the right
          modalCard[counter + 1].style.transform = 'translate(90%, -50%)' //current slide move right
          modalCard[counter + 1].previousElementSibling.previousElementSibling ? modalCard[counter + 1].previousElementSibling.previousElementSibling.style.transform = 'translate(-190%, -50%)' : null; //two slides previous moves to the partial view on the left
          modalCard[counter].style.transform = 'translate(-50%, -50%)'; //current left slide move to center
          modalCard[counter].previousElementSibling.previousElementSibling.style.display = 'flex'; //set new left slide to left position
          modalCard[counter].previousElementSibling.previousElementSibling.style.transform = 'translate(-290%, -50%)';


        });


        rightArrow.addEventListener('click', ()=> {
          leftArrow.className = 'active';//reactivate left arrow when right arrow is clicked
          counter += 1;
          if (counter === modalCard.length -1) {
            rightArrow.className = 'disabled'; //if the index value is the last child,  then reset the right arrow to disabled
          }
          modalCard[counter - 1].previousElementSibling ? modalCard[counter - 1].previousElementSibling .style.transform = 'translate(-290%, -50%)' : null; //previous left slide disappears only if it exists
          modalCard[counter - 1].style.transform = 'translate(-190%, -50%)'; //current slide move left
          modalCard[counter - 1].nextElementSibling.nextElementSibling ? modalCard[counter - 1].nextElementSibling.nextElementSibling.style.transform = 'translate(90%, -50%)' : null;
          modalCard[counter].style.transform = 'translate(-50%, -50%)'; //right slide move to center
          modalCard[counter].nextElementSibling.nextElementSibling.style.display = 'flex'; //display new right slide
          modalCard[counter].nextElementSibling.nextElementSibling.style.transform = 'translate(190%, -50%)'; //set new right slide to right position


        });


});
}/////End of For Loop
