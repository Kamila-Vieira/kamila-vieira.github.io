const menuResponsive = document.querySelector('.menu-responsive');
const firstBarMenu = menuResponsive.querySelector('.first-bar-menu');
const secondBarMenu = menuResponsive.querySelector('.second-bar-menu');
const thirdBarMenu = menuResponsive.querySelector('.third-bar-menu');
const navigationBarResponsive = document.querySelector('.nav-responsive');

function toogleResponsiveMenu(){
  firstBarMenu.classList.toggle('first-bar-menu-after');
  secondBarMenu.classList.toggle('second-bar-menu-after');
  thirdBarMenu.classList.toggle('third-bar-menu-after');
  navigationBarResponsive.classList.toggle('nav-bar-menu-after');
}

menuResponsive.onclick = toogleResponsiveMenu;