const nav = document.getElementById('nav');
const intro = document.querySelector('.intro');
const overlay = document.querySelector('#overlay');
const modalCard = document.getElementsByClassName('modal-card');
const card = document.getElementsByClassName('card');
const leftArrow = document.getElementById('left-arrow');
const rightArrow = document.getElementById('right-arrow');
const closeButton = document.querySelectorAll('.close-button');
let counter = 0;





//sticky nav
window.onscroll = function() {myFunction();};

let sticky = nav.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    nav.classList.add("sticky");
    nav.style.maxWidth = "1200px";
    nav.style.marginTop = 0;
    intro.style.marginTop = "6em";


  } else {
    nav.classList.remove("sticky");
    intro.style.marginTop = "2em";
    nav.style.marginTop = "1em";

  }
}
//end of sticky nav



//Modal Overlay appears on click

for (let i=0; i<card.length; i+=1) { //loops through card list
  card[i].insertAdjacentHTML('beforeend','<p class="calling-card">tap for more info!</p>');
  card[i].addEventListener('click', (e)=> {
    counter += i;  //counter is set to the index value of the card clicked
    console.log(counter);
    overlay.style.display = "flex";   //when clicked, overlay modal appears
    overlay.style.opacity = 0.75; //sets opacity of overlay
    overlay.style.transition = 'opacity .3s ease-in 3s';
    modalCard[counter].style.display = 'flex'; //--set display of modal
    modalCard[counter].classList.add('center'); //sets the class of the card clicked to the 'center class' stylings'
    modalCard[counter].children[0].innerHTML = "close"; //adds innerHTML of 'close' then translates it outside the modal-card as a close button
    modalCard[counter].style.paddingTop = "0px"//removes added 'padding'

    if (counter !==0 || counter !==modalCard.length) {//If the card clicked is not the first or last child, display both arrows
      leftArrow.className ='active';
      rightArrow.className = 'active';
    }

    if (modalCard[counter].previousElementSibling !== null)  { //if a previous sibling exists, display it offscreen to the left
      modalCard[counter].previousElementSibling.style.display = 'flex';
      modalCard[counter].previousElementSibling.classList.add('left-cards'); //left screen placement
        if (modalCard[counter].previousElementSibling.previousElementSibling !==null) {//if two previous siblings exists...
          modalCard[counter].previousElementSibling.previousElementSibling.style.display = 'flex';
          modalCard[counter].previousElementSibling.previousElementSibling.classList.add('offscreen-left');//if two previous exists, add 'offscreen-left' class' stylings
      }
    }


    if (modalCard[counter].nextElementSibling !== null ) { //if a next sibling exists, display it offscreen to the right
      modalCard[counter].nextElementSibling.style.display = 'flex';
      modalCard[counter].nextElementSibling.classList.add('right-cards'); //right screen placement
      if (modalCard[counter].nextElementSibling.nextElementSibling !==null) {
        modalCard[counter].nextElementSibling.nextElementSibling.style.display = 'flex';
        modalCard[counter].nextElementSibling.nextElementSibling.classList.add('offscreen-right');//if two previous exists, add 'offscreen-right' class' stylings
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

          console.log(counter);

          if (counter === 0) {
            leftArrow.className = 'disabled'; //if the index value is 0 (the first element), then reset the left arrow to disabled
          }

          // Current Right Card slides out of view to the right
          modalCard[counter + 1].nextElementSibling ? modalCard[counter + 1].nextElementSibling.classList.remove('right-cards') : null;
          modalCard[counter + 1].nextElementSibling ? modalCard[counter + 1].nextElementSibling.classList.add('offscreen-right') : null;
          //
          // // Current Card slides to the right partial view
          modalCard[counter + 1].classList.remove('center');//current slide move right ///   2
          modalCard[counter + 1].children[0].innerHTML = '';
          modalCard[counter + 1].classList.add('right-cards');//current slide move right ///   2
          modalCard[counter + 1].style.paddingTop = '17px'; //resets old padding

          // Current Left Card slides to center and class is removed
          modalCard[counter].classList.remove('left-cards'); /// 1
          modalCard[counter].classList.add('center'); //current left slide move to center
          modalCard[counter].children[0].innerHTML = 'close';//adds the text 'close' to the new display card
          modalCard[counter].style.paddingTop = '0px'//removes added padding

          // New Card appears in partial view to the left
          modalCard[counter].previousElementSibling ? modalCard[counter].previousElementSibling.classList.remove('offscreen-left') : null;
          modalCard[counter].previousElementSibling ? modalCard[counter].previousElementSibling.classList.add('left-cards') : null ;


          //New Card appears offscreen-left
          modalCard[counter].previousElementSibling.previousElementSibling ? modalCard[counter].previousElementSibling.previousElementSibling.style.display = 'flex' : null;
          modalCard[counter].previousElementSibling.previousElementSibling ? modalCard[counter].previousElementSibling.previousElementSibling.classList.add('offscreen-left') : null;

        });


        rightArrow.addEventListener('click', ()=> {
          leftArrow.className = 'active';//reactivate left arrow when right arrow is clicked

          console.log(counter);
          if (counter === modalCard.length -1) {
            rightArrow.className = 'disabled'; //if the index value is the last child,  then reset the right arrow to disabled
          }
          // Current Left Card sides out of view to the left
          modalCard[counter -1].previousElementSibling ? modalCard[counter -1].previousElementSibling.classList.remove('left-cards') : null;
          modalCard[counter -1].previousElementSibling ? modalCard[counter -1].previousElementSibling.classList.add('offscreen-left') : null;
          //
          // // Current Card slides to the left partial view
          modalCard[counter - 1].classList.remove('center');//current slide move right ///   2
          modalCard[counter - 1].children[0].innerHTML = '';
          modalCard[counter - 1].classList.add('left-cards');//current slide move right ///   2
          modalCard[counter - 1].style.paddingTop = '17px'//resets old padding

          // Current Right Card slides to center and class is removed
          modalCard[counter].classList.remove('right-cards'); /// 1
          modalCard[counter].classList.add('center'); //current left slide move to center
          modalCard[counter].children[0].innerHTML = 'close';//current card has 'close' text added for close button
          modalCard[counter].style.paddingTop = '0px'//removes added padding

          // New Card appears in partial view to the right
          modalCard[counter].nextElementSibling ? modalCard[counter].nextElementSibling.classList.remove('offscreen-right') : null;
          modalCard[counter].nextElementSibling ? modalCard[counter].nextElementSibling.classList.add('right-cards') : null;


          //New Card appears offscreen-right
          modalCard[counter].nextElementSibling.nextElementSibling ? modalCard[counter].nextElementSibling.nextElementSibling.style.display = 'flex' : null ;
          modalCard[counter].nextElementSibling.nextElementSibling ? modalCard[counter].nextElementSibling.nextElementSibling.classList.add('offscreen-right') : null;


        });




});

counter = 0;
}/////End of For Loop

//close button functionality

for (i=0; i<modalCard.length; i+=1) {
closeButton[i].addEventListener('click', () => {
  overlay.style.display = 'none';
  overlay.style.opacity = 0.75;

  modalCard[counter].children[0].innerHTML = '';
  counter = 0;//reset counter to zero so modal can start up again with proper index
  console.log(counter);
  for (i=0; i < modalCard.length; i+=1) {
    modalCard[i].classList.remove('offscreen-right', 'offscreen-left', 'center', 'left-cards', 'right-cards');//remove ALL added classes so they can all restart from default when modal pops up again
    modalCard[i].style.display = 'none';


  }

});
}

rightArrow.addEventListener('click',()=> {
  counter += 1;//Add one to 'counter' when clicked
});

leftArrow.addEventListener('click', () => {
  counter += -1;//subtract one from 'counter' when clicked
});

///

document.addEventListener("DOMContentLoaded", function() {
  window.scrollTo(0,1); //when page loads, default down to the '1' scroll position on Y axis so the scrollSlide plug can slide in first content
});
