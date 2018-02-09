// Open/close menu
function toggleMenu() {
  const newMenu = "responsive-menu";
  var menu = document.getElementById("navigation-top");
  const index = menu.className.indexOf(newMenu);
  if (index === -1) {
    menu.className += ` ${newMenu}`;
  } else {
    menu.className = menu.className.replace(newMenu, '').trim();
  }
}

var indexSlide = 1;
// show first image
showSlides(indexSlide);

// prev/next action
function plusSlides(n) {
  showSlides(indexSlide += n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slides-box");
  if (n > slides.length) {indexSlide = 1}
  if (n < 1) {indexSlide = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[indexSlide-1].style.display = "block";
}

var myVar = setInterval(function(){ plusSlides(1) }, 3000);
