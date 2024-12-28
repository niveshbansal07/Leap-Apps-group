const select = selector => document.querySelector(selector);

const navBtn = select('.nav-btn');

navBtn.addEventListener('click', () => {
	navBtn.classList.toggle('nav-open');
	select('.desktop-nav').classList.toggle('mobile-nav-open');
	select('.main-container').classList.toggle('main-container-transform');
});