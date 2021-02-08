let carts = document.querySelectorAll('.cart');
let modal = document.querySelector('.modal');
let closeModal = document.querySelector('.close-modal');

carts.forEach((item) => {
	item.addEventListener('click',function(e) {
		let title = item.firstElementChild.textContent;
		let price = item.children[1].firstElementChild.textContent;
		let target = e.target;
		if(target.classList.contains('btn-green') && modal.classList.contains('hide')){
			modal.classList.remove('hide');
			let cartTitle = item.children[0].textContent;
			let cartPrice = item.children[1].children[0].textContent;
			document.querySelector('.modal__cart-title').textContent = cartTitle;
			document.querySelector('.modal__cart-text').textContent = cartPrice;
		}
	})
})

modal.addEventListener('click',function(e) {
	let target = e.target;
	console.log(target);
	if(!modal.classList.contains('hide') && target == modal || target == closeModal) {
		modal.classList.add('hide');
	}
})
