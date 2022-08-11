const btn = document.getElementById('menu-btn');
const overlay = document.getElementById('overlay');
const menu = document.getElementById('mobile-menu')
const counters = document.querySelectorAll('.counter')
// like a state in react to be used in component
let scrollStarted = false;

btn.addEventListener('click', navToggle);
// listen to scroll page for counter start
document.addEventListener('scroll', scrollPage);


function navToggle() {
  btn.classList.toggle('open');
  overlay.classList.toggle('overlay-show')
  // remove scrolling when hamburger click
  document.body.classList.toggle('stop-scrolling')
  menu.classList.toggle('show-menu')
}

function scrollPage() {
  // window.scrollY gives the value of the scroll position of y axis
  const scrollPosition = window.scrollY
  console.log(scrollPosition)

  if(scrollPosition > 100 && !scrollStarted) {
    // call function to start number count
    countUp()
    scrollStarted = true
    // if we scroll up from counters and scrollStarted is true, reset counters to 0
  } else if (scrollPosition < 100 && scrollStarted) {
    reset()
    scrollStarted = false
  }
}

function countUp(){
  counters.forEach((counter) => {
    counter.innerText = '0';

    const updateCounter = () => {
      // Get count target from data-target attribute
      const target = Number(counter.getAttribute('data-target'));
      // Get current counter value // Instead of wrapping with Number() we can just add + sign in front to conver value into number
      const c = +counter.innerText;

      //Create an increment
      const increment = target / 100;
      console.log(increment)
    
      // If counter is less than target, add increment
      if(c < target) {
        //round up to whole number and set counter value
        counter.innerText = `${Math.ceil(c + increment)}`
        
        // calls again updateCounter function every 75 miliseconds only until c < target
        setTimeout(updateCounter, 75);
      } else {
        counter.innerText = target
      }
      
    }
    updateCounter()
  });
}

function reset() {
  counters.forEach((counter) => counter.innerHTML = '0')
}



