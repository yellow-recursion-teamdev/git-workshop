import { __TECH_LIST__ } from './techlist.js';

const __COLLECTION_KEY__ = 'omikuji-collection';

function addIcons() {
	const techIconClasses = techIconClassesInLocalStorage();
	if (!techIconClasses.length) return;
	const icons = techIconClasses
		.concat(techIconClasses)
		.concat(techIconClasses)
		.concat(techIconClasses)
		.map((cls) => {
			const icon = document.createElement('i');
			icon.classList.add(
				'position-absolute',
				'top-0',
				'fa-icon',
				'fa-brands',
				`fa-2x`,
				cls
			);
			const anime = randomAnimation();
			icon.animate(anime.keyframes, anime.detail);
			return icon;
		});

	const main = document.getElementsByTagName('main')[0];
	icons.forEach((icon) => {
		main.appendChild(icon);
	});
}

const techIconClassesInLocalStorage = () => {
	const collection = JSON.parse(localStorage.getItem(__COLLECTION_KEY__));
	if (!collection) return [];
	const iconClasses = collection.filter(
		(val) => typeof val === 'string' && val.substring(0, 3) === 'fa-'
	);
	return iconClasses;
};

function insertTechIconCounterText() {
	const counter = document.getElementById('counter');

	const countAllTech = __TECH_LIST__.length;
	const myTech = JSON.parse(localStorage.getItem(__COLLECTION_KEY__));
	const myTechUnique = [...new Set(myTech)];
	const countMyTech = myTechUnique.length;

	counter.innerText = `${countMyTech} / ${countAllTech}`;
}

window.onload = (e) => {
	console.log(localStorage);
	addIcons();
	insertTechIconCounterText();
};
