
// Script for Main Content Animation  //

const animItems = document.querySelectorAll('.anim-items');
if (animItems.length > 0 ) {
  window.addEventListener('scroll', animOnScroll);
  function animOnScroll() {
    for (var i = 0; i < animItems.length; i++) {
      const animItem = animItems[i];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 3; 

      let animItemPoint = window.innerHeight - animItemHeight / animStart;
      if (animItemHeight > window.innerHeight ) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }

      if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
        animItem.classList.add('active');
      } else {
        if (!animItem.classList.contains('animHide')) {
          animItem.classList.remove('active');
        }
      }
    }
  }
  function offset(el) {
      const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
  }
  setTimeout(function() {
    animOnScroll();
  }, 500);
}

// Script for Toggle Color Theme // 

const switchStyle = document.documentElement.style;
const toggle = document.querySelector(".switch-input[theme-toggle]");

toggle.addEventListener("click", () => {
  const color1 = getComputedStyle(document.documentElement).getPropertyValue(
    "--color-1"
  );
  const color2 = getComputedStyle(document.documentElement).getPropertyValue(
    "--color-2"
  );
  const color3 = getComputedStyle(document.documentElement).getPropertyValue(
    "--color-3"
  );
  const color4 = getComputedStyle(document.documentElement).getPropertyValue(
    "--color-4"
  );
  const color5 = getComputedStyle(document.documentElement).getPropertyValue(
    "--color-5"
  );
  const color6 = getComputedStyle(document.documentElement).getPropertyValue(
    "--color-6"
  );
  switchStyle.setProperty("--color-1", color2);
  switchStyle.setProperty("--color-2", color1);
  switchStyle.setProperty("--color-3", color4);
  switchStyle.setProperty("--color-4", color3);
  switchStyle.setProperty("--color-5", color6);
  switchStyle.setProperty("--color-6", color5);
});

// Script for Burger Menu // 

'use strict';

(function() {
  var body = document.body;
  var burgerMenu = document.getElementsByClassName('b-menu')[0];
  var burgerContain = document.getElementsByClassName('b-container')[0];
  var burgerNav = document.getElementsByClassName('burger-nav')[0];

  burgerMenu.addEventListener('click', function toggleClasses() {
    [body, burgerContain, burgerNav].forEach(function (el) {
      el.classList.toggle('open');
    });
  }, false);
})();

// Script for Header Footer // 

window.addEventListener("scroll", function(){
	var header = document.querySelector(".header");
	header.classList.toggle("stiky", window.scrollY > 0);

  var footer = document.querySelector(".footer");
  footer.classList.toggle("stiky", window.scrollY < 10);

})

// Script for Button Scroll Top // 

const toTop = document.querySelector(".bnt-scroll-top");
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
})