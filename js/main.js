const nav = document.getElementById('nav');
const intro = document.querySelector('.intro');
const overlay = document.querySelector('#overlay');
const modalCard = document.getElementsByClassName('modal-card');
const card = document.getElementsByClassName('card');
const leftArrow = document.getElementById('left-arrow');
const rightArrow = document.getElementById('right-arrow');
let counter = 0;

//media query variables


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

    modalCard[i].classList.add('center');

    if (modalCard[counter].previousElementSibling !== null)  { //if a previous sibling exists, display it offscreen to the left
      modalCard[counter].previousElementSibling.style.display = 'flex';
      modalCard[counter].previousElementSibling.classList.add('left-cards'); //left screen placement
        if (modalCard[counter].previousElementSibling.previousElementSibling !==null) {
          modalCard[counter].previousElementSibling.previousElementSibling.style.display = 'flex';
          modalCard[counter].previousElementSibling.previousElementSibling.classList.add('offscreen-left');
      }
    }


    if (modalCard[counter].nextElementSibling !== null ) { //if a next sibling exists, display it offscreen to the right
      modalCard[counter].nextElementSibling.style.display = 'flex';
      modalCard[counter].nextElementSibling.classList.add('right-cards'); //right screen placement
      if (modalCard[counter].nextElementSibling.nextElementSibling !==null) {
        modalCard[counter].nextElementSibling.nextElementSibling.style.display = 'flex';
        modalCard[counter].nextElementSibling.nextElementSibling.classList.add('offscreen-right')
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

          // Current Right Card sides out of view to the right
          modalCard[counter + 1].nextElementSibling ? modalCard[counter + 1].nextElementSibling.classList.remove('right-cards') : null;
          modalCard[counter + 1].nextElementSibling ? modalCard[counter + 1].nextElementSibling.classList.add('offscreen-right') : null;
          //
          // // Current Card slides to the right partial view
          modalCard[counter + 1].classList.remove('center');//current slide move right ///   2
          modalCard[counter + 1].classList.add('right-cards');//current slide move right ///   2

          // Current Left Card slides to center and class is removed
          modalCard[counter].classList.remove('left-cards'); /// 1
          modalCard[counter].classList.add('center'); //current left slide move to center

          // New Card appears in partial view to the left
          modalCard[counter].previousElementSibling ? modalCard[counter].previousElementSibling.classList.remove('offscreen-left') : null;
          modalCard[counter].previousElementSibling ? modalCard[counter].previousElementSibling.classList.add('left-cards') : null ;


          //New Card appears offscreen-left
          modalCard[counter].previousElementSibling.previousElementSibling ? modalCard[counter].previousElementSibling.previousElementSibling.style.display = 'flex' : null
          modalCard[counter].previousElementSibling.previousElementSibling ? modalCard[counter].previousElementSibling.previousElementSibling.classList.add('offscreen-left') : null;

        });


        rightArrow.addEventListener('click', ()=> {
          leftArrow.className = 'active';//reactivate left arrow when right arrow is clicked
          counter += 1;
          if (counter === modalCard.length -1) {
            rightArrow.className = 'disabled'; //if the index value is the last child,  then reset the right arrow to disabled
          }
          // Current Left Card sides out of view to the left
          modalCard[counter -1].previousElementSibling ? modalCard[counter -1].previousElementSibling.classList.remove('left-cards') : null;
          modalCard[counter -1].previousElementSibling ? modalCard[counter -1].previousElementSibling.classList.add('offscreen-left') : null;
          //
          // // Current Card slides to the left partial view
          modalCard[counter - 1].classList.remove('center');//current slide move right ///   2
          modalCard[counter - 1].classList.add('left-cards');//current slide move right ///   2

          // Current Right Card slides to center and class is removed
          modalCard[counter].classList.remove('right-cards'); /// 1
          modalCard[counter].classList.add('center'); //current left slide move to center

          // New Card appears in partial view to the right
          modalCard[counter].nextElementSibling ? modalCard[counter].nextElementSibling.classList.remove('offscreen-right') : null;
          modalCard[counter].nextElementSibling ? modalCard[counter].nextElementSibling.classList.add('right-cards') : null;


          //New Card appears offscreen-right
          modalCard[counter].nextElementSibling.nextElementSibling ? modalCard[counter].nextElementSibling.nextElementSibling.style.display = 'flex' : null ;
          modalCard[counter].nextElementSibling.nextElementSibling ? modalCard[counter].nextElementSibling.nextElementSibling.classList.add('offscreen-right') : null;
        });


});
}/////End of For Loop
