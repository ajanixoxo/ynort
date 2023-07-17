let fullImgBox = document.getElementById("fullImgBox");
let fullImg = document.getElementById("fullImg");

document.addEventListener('DOMContentLoaded', function() {
    if (window.innerWidth < 960) {
      document.querySelector(".nav-horizontal").style.display = "none";
    } else {
      document.querySelector(".mobile-nav").style.display = "none";
    }
  
    document.querySelector(".menu-btn").addEventListener('click', function() {
      document.querySelector(".responsive-menu").classList.toggle("expand");
    });
  });
  
  window.addEventListener('resize', function() {
    if (window.innerWidth < 960) {
      document.querySelector(".nav-horizontal").style.display = "none";
      document.querySelector(".mobile-nav").style.display = "block";
    } else {
      document.querySelector(".mobile-nav").style.display = "none";
      document.querySelector(".nav-horizontal").style.display = "block";
    }
  });
  

function openFullImg(pic){
    fullImgBox.style.display = "flex"; 
    fullImg.src = pic;
}

function closeFullImg(){
    fullImgBox.style.display = "none"
  
}
const menuItems = document.querySelectorAll('.mobile-menu a');

menuItems.forEach(item => {
  item.addEventListener('click', () => {
    document.getElementById('toggle-menu').checked = false;
  });
});
AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});