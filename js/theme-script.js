'use strict'

const switcher = document.querySelector('.theme-button');

switcher.addEventListener('click', function() {
	document.body.classList.toggle('dark-theme');
});