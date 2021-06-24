'use strict';

const mobileMenu = document.querySelector('.mobile__menu');
const nav = document.querySelector('nav');
const mobileExit = document.querySelector('.mobile__exit');

mobileMenu.addEventListener('click', function (e) {
	e.preventDefault();
	nav.classList.add('mobile__menu');
	this.classList.add('mobile__menu-test');
});

mobileExit.addEventListener('click', function (e) {
	e.preventDefault();
	nav.classList.remove('mobile__menu');
});

// Fade menu on hover
// 1) Add the event listener to the parent element
// 2) decide where the e.target originates

const fadeHover = function (opacity) {
	return function (e) {
		if (e.target.classList.contains('link')) {
			const siblings = e.target.closest('nav').querySelectorAll('.link');
			siblings.forEach(function (sibling) {
				if (sibling !== e.target) {
					sibling.style.opacity = opacity;
				}
			});
		}
	};
};

nav.addEventListener('mouseover', fadeHover(0.5));
nav.addEventListener('mouseout', fadeHover(1));

// Sticky Navigation
const section1 = document.querySelector('#section--1');
const header = document.querySelector('header');
const navBar = document.querySelector('.navbar');
const navigationHeight = navBar.getBoundingClientRect().height;
// console.log(navigationHeight);
const stickyCallback = function (entries) {
	const [entry] = entries;
	console.log(entry);
	if (entry.isIntersecting) {
		navBar.classList.remove('sticky');
	} else {
		navBar.classList.add('sticky');
	}
};
const stickyOptions = {
	root: null,
	threshold: 0,
	rootMargin: `-${navigationHeight}px`,
};
const observer = new IntersectionObserver(stickyCallback, stickyOptions);
observer.observe(section1);
