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