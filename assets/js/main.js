const menuResponsive = document.querySelector('.menu-responsive');
const firstBarMenu = menuResponsive.querySelector('.first-bar-menu');
const secondBarMenu = menuResponsive.querySelector('.second-bar-menu');
const thirdBarMenu = menuResponsive.querySelector('.third-bar-menu');
const navigationBarResponsive = document.querySelector('#nav-responsive');

function toogleResponsiveMenu(event){
  event.preventDefault();
  if(navigationBarResponsive.style.display = "none"){
    navigationBarResponsive.style.display = "block";
  }else{
    navigationBarResponsive.style.display = "none";
  }
 /*  if(navigationBarResponsive.style.display = 'block'){
    navigationBarResponsive.style.display = 'none';
  } */
  firstBarMenu.classList.toggle('first-bar-menu-after');
  secondBarMenu.classList.toggle('second-bar-menu-after');
  thirdBarMenu.classList.toggle('third-bar-menu-after');
}

menuResponsive.onclick = toogleResponsiveMenu;