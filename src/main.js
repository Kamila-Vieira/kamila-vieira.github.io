const menuResponsive = document.querySelector('.menu-responsive');

menuResponsive.addEventListener("click", function toogleResponsiveMenu(){
  menuResponsive.querySelector('.first-bar-menu').classList.toggle('first-bar-menu-after');
  menuResponsive.querySelector('.second-bar-menu').classList.toggle('second-bar-menu-after');
  menuResponsive.querySelector('.third-bar-menu').classList.toggle('third-bar-menu-after');
  document.querySelector('.nav-responsive').classList.toggle('nav-bar-menu-after');
});