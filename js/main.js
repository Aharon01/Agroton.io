const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu-list');

menuBtn.addEventListener('click', ()=>{
  menu.classList.toggle('menu-active');
})