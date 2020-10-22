window.onload = function() {
	const product_btn_el = document.querySelectorAll('.products .product');
	const colour_btn_el = document.querySelectorAll('.colors .color');
	const imagery_el = document.querySelector('.imagery');
	const image_el = document.querySelector('.imagery .image');
	var colour_code;
		for (let i = 0; i < colour_btn_el.length; i++) {
			let btn = colour_btn_el[i];
			btn.addEventListener('click', function () {
				document.querySelector('.colors .color.selected').classList.remove('selected');
				this.classList.add('selected');
			});
		}

		for (let i = 0; i < product_btn_el.length; i++) {
			let btn = product_btn_el[i];
			btn.addEventListener('click', function() {
				document.querySelector('.products .product.selected').classList.remove('selected');
				this.classList.add('selected');
				for(let x=0;x<colour_btn_el.length;x++){
					if(colour_btn_el[x].checked==true){
						colour_code = colour_btn_el[x].value;
					}
				}
				switch(colour_code){
					case "1":
							image_el.src = "images/black-" + this.dataset.name + '.png';
							imagery_el.style.backgroundColor = this.dataset.colour;
							break;
					case "2":
							image_el.src = "images/white-" + this.dataset.name + '.png';
							imagery_el.style.backgroundColor = this.dataset.colour;
							break;
					default:
						image_el.src = "images/white-" + this.dataset.name + '.png';
						imagery_el.style.backgroundColor = this.dataset.colour;
						//alert('Nie wybrałeś koloru! Wybierz kolor a następnie rodzaj produktu.');
				}	
			});
		}

	
}