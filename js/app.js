let headerBurger = document.querySelector('.header__burger');
let menu = document.querySelector('.menu');

headerBurger.addEventListener('click',function(){
	menu.classList.toggle('active');
	headerBurger.classList.toggle('active');
})