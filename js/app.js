let headerBurger = document.querySelector('.header__burger');
let menu = document.querySelector('.menu');

headerBurger.addEventListener('click',function(){
	menu.classList.toggle('active');
	headerBurger.classList.toggle('active');
})

let categoryButtons = document.querySelectorAll('.category__btn');
let categoryCards = document.querySelectorAll('.card');
let categoryList = document.querySelector('.category__list');

//функції які додають і забирають клас active
function addClassToElement(element) {
	element.classList.add('active');
}
function removeClassFromElement(el) {
	el.classList.remove('active');
}

addClassToElement(categoryButtons.item(0));

function hideCategoryCards(attributeValue) {
	categoryCards.forEach(card => {
		if(card.getAttribute('category') != attributeValue) {
			card.classList.add('hide');
			card.classList.remove('show');
		}
	})
}
function showCategoryCards(attributeValue) {
	categoryCards.forEach(card => {
		if(card.getAttribute('category') == attributeValue) {
			card.classList.remove('hide');
			card.classList.add('show');
		}
	})
}

function checkAttribute(catEl,attributeValue) {
	if(catEl.hasAttribute('category')) {
		// console.log(catEl);
		if(catEl.getAttribute('category') == 'all') {
			addClassToElement(catEl);
			categoryCards.forEach(card => {
				card.classList.remove('hide');
				card.classList.add('show');
			})
			categoryButtons.forEach(btn => {
				if(btn.getAttribute('category') != 'all') {
					removeClassFromElement(btn);
				}
			})
		} else if(catEl.getAttribute('category') == attributeValue) {
			addClassToElement(catEl);
			hideCategoryCards(attributeValue);
			showCategoryCards(attributeValue);
			categoryButtons.forEach(btn => {
				if(btn.getAttribute('category') != attributeValue) {
					removeClassFromElement(btn);
				}
			})
		}
	}
}

categoryList.addEventListener('click',function(e) {
	let target = e.target;
	checkAttribute(target,'all');
	checkAttribute(target,'webDesign');
	checkAttribute(target,'graphicDesign');
	checkAttribute(target,'fashion');
	checkAttribute(target,'logoDesign');
	checkAttribute(target,'addvertising');
})
