const toTop = document.querySelector(".bnt-scroll-top");
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
})
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
const switchStyle = document.documentElement.style;
const toggle = document.querySelector(".switch__input[theme-toggle]");
toggle.addEventListener("click", () => {
  const color1 = getComputedStyle(document.documentElement).getPropertyValue(
    "--color-1"
  );
  const color2 = getComputedStyle(document.documentElement).getPropertyValue(
    "--color-2"
  );
    switchStyle.setProperty("--color-1", color2);
  switchStyle.setProperty("--color-2", color1);
});


window.addEventListener("scroll", function(){
	var header = document.querySelector(".heading");
	header.classList.toggle("stiky", window.scrollY > 0);
})
window.addEventListener("scroll", function(){
	var footer = document.querySelector(".footer");
	footer.classList.toggle("stiky", window.scrollY < 10);
})

$( "div.burger-menu" ).click(function() {
  $( 'div.burger-logo-container' ).toggleClass( "menu-open" );
});