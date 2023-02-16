const headerStakeBtn = document.querySelector('.header-stake-btn');
const services = document.querySelectorAll('.service-item');

headerStakeBtn.addEventListener('click', () => {
	alert('You clicked the "Stake With Undefined Hash" button!');
});

services.forEach(service => {
	service.addEventListener('mouseover', () => {
		service.classList.add('anim-bounce');
	});

	service.addEventListener('animationend', () => {
		service.classList.remove('anim-bounce');
	});
});

const themeToggle = document.querySelector('.theme-toggle');
const html = document.querySelector('html');

themeToggle.addEventListener('click', () => {
	html.classList.toggle('dark');
});
