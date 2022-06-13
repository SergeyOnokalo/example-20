$(function(){
  $('.slider').slick({
  dots: true,
  fade: true,
  arrows:true,
  autoplay: true,
  autoplaySpeed: 5000
  });
});

const body = document.querySelector('body')
const btnMenu = document.querySelector('#btnMenu')
const menuWrapper = document.querySelector('#menuWrapper')

btnMenu.addEventListener('click', () =>{
  body.classList.toggle('body__overflow')
  btnMenu.classList.toggle('header__menu--active')
  menuWrapper.classList.toggle('menu__wrapper--active')
})

