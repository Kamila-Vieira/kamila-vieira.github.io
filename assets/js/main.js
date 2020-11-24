const menuResponsive = document.querySelector('.menu-responsive')

function toogleResponsiveMenu(){
  let navigationBarResponsive = document.querySelector('#nav-bar-responsive');
  if (navigationBarResponsive.style.display === "none") {
    menuResponsive.style.transform = "rotate(-90deg)";
    navigationBarResponsive.style.display = "block";
  } else {
    menuResponsive.style.transform = "rotate(0deg)"
    navigationBarResponsive.style.display = "none";
  }
}

menuResponsive.onclick = toogleResponsiveMenu;