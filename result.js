import { __TECH_LIST__ } from './techlist.js';

window.onload = () => {
	const tech = randomTech();
	insertRandomTechInfo(tech);
	addTechToCollection(tech);
};

class Tech {
	constructor(
		name,
		faIconClass,
		img,
		rarity,
		countryIcon,
		countryName,
		description,
		quote,
		twitterUrl
	) {
		this.name = name;
		this.faIconClass = faIconClass;
		this.img = img;
		this.rarity = rarity;
		this.countryIcon = countryIcon;
		this.countryName = countryName;
		this.description = description;
		this.quote = quote;
		this.twitterUrl = twitterUrl;
	}
	get imgUrl() {
		return this.getImgUrl();
	}

	getImgUrl() {
		if (this.img === null) return;
		return `./img/` + this.img;
	}
}

const randomInt = (maxInt) => {
	return Math.floor(Math.random() * maxInt);
};

const randomrarity = () => {
	const expectation = {
		S: 0.05,
		A: 0.25,
		B: 0.5,
		C: 1.0,
	};
	const randomFloat = Math.random();
	for (const key in expectation) {
		if (randomFloat <= expectation[key]) {
			return key;
		}
	}
	return 'S';
};

const randomTech = () => {
	const techs = __TECH_LIST__.map(
		(tech) =>
			new Tech(
				tech.name,
				tech.faIconClass,
				tech.img,
				tech.rarity,
				tech.countryIcon,
				tech.countryName,
				tech.description,
				tech.quote,
				tech.twitterUrl
			)
	);
	const rarity = randomrarity();
	const oneRarityTechs = techs.filter((tech) => tech.rarity === rarity);
	if (!oneRarityTechs.length) {
		console.log(Error('該当するレアリティのTechが見つかりませんでした'));
		return techs[randomInt(__TECH_LIST__.length - 1)];
	}
	const randomIndex = randomInt(oneRarityTechs.length - 1);
	return oneRarityTechs[randomIndex];
};

function insertRandomTechInfo(tech) {
	const techIcon = document.getElementById('tech-icon');
	const techImg = document.getElementById('tech-image');
	const techName = document.getElementById('tech-name');
	const techDescription = document.getElementById('tech-description');

	if (tech.faIconClass !== null) {
		techIcon.classList.add(tech.faIconClass);
	}
	if (tech.img !== null) {
		techImg.setAttribute('src', tech.imgUrl);
		techImg.setAttribute('width', '80%');
		techImg.setAttribute('height', '80%');
	}
	techName.innerText = tech.name;
	techDescription.innerText = tech.description;
}

function addTechToCollection(tech) {
	const __COLLECTION_KEY__ = 'omikuji-collection';
	if (localStorage) {
		if (localStorage.getItem(__COLLECTION_KEY__)) {
			const collection = JSON.parse(localStorage.getItem(__COLLECTION_KEY__));
			const value = tech.faIconClass ? tech.faIconClass : tech.name;

			collection.push(value);
			localStorage.setItem(__COLLECTION_KEY__, JSON.stringify(collection));
		} else {
			const value = tech.faIconClass ? tech.faIconClass : tech.name;
			localStorage.setItem(__COLLECTION_KEY__, JSON.stringify([value]));
		}
	}
}

document
	.getElementById('again-button')
	.addEventListener('click', onAgainButtonClicked);

function onAgainButtonClicked() {
	location.reload();
}
