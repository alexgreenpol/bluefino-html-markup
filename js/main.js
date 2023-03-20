const image = document.getElementsByClassName('thumbnail');
new simpleParallax(image, {
	orientation: 'left',
	delay: .6,
	transition: 'cubic-bezier(0,0,0,1)'
});