//Efeito escrevendo 
function typeWriter(element) {
  const array = element.innerHTML.split('');
  element.innerHTML = '';
  let index = 0;

  setInterval(() => {
    if (index < array.length) {
      element.innerHTML += array[index];
      index++;
    } else {
      index = 0;
      element.innerHTML = '';
    }
  }, 75);
}

const texto = document.querySelector('h3');
typeWriter(texto);
//-----------------------------------------------------------------//

//Funcionamento do botão hambuguer
var ul = document.querySelector('nav ul');
var menuBtn = document.querySelector('.menu-btn i');
var mainContent = document.querySelector('.Main');


function menuShow() {
  var menuList = document.getElementById('menuList');
  menuList.classList.toggle('open'); 

  if (menuList.classList.contains('open')) {
  mainContent.classList.add('hide-on-menu-open'); 
  } else {
  mainContent.classList.remove('hide-on-menu-open'); 
}
}
var menuItems = document.querySelectorAll('#menuList li a');

menuItems.forEach(function(item) {
  item.addEventListener('click', menuShow);
});