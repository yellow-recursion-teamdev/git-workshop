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
		console.log('this is getter');
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

	console.log(tech);
	if (tech.faIconClass !== null) {
		techIcon.classList.add(tech.faIconClass);
	}
	if (tech.img !== null) {
		console.log('tech.img is not null');
		console.log(tech.imgUrl);
		techImg.setAttribute('src', tech.imgUrl);
		techImg.setAttribute('width', '80%');
		techImg.setAttribute('height', '80%');
	}
	techName.innerText = tech.name;
	techDescription.innerText = tech.description;
}

window.onload = (e) => {
	const tech = randomTech();
	insertRandomTechInfo(tech);
	localStorage.setItem(tech.name, tech.faIconClass);
};


document
	.getElementById('again-button')
	.addEventListener('click', onAgainButtonClicked);

function onAgainButtonClicked() {
	location.reload();
}

const __TECH_LIST__ = [
	{
		name: 'ebisenttt',
		img: 'ebisenttt.png',
		faIconClass: null,
		rarity: 'C',
		countryIcon: './img/japan.svg',
		countryName: 'Japan',
		description: '脱！初心者みくじ開発者',
		quote: 'Everything happens for a reason.',
		twitterUrl: 'https://twitter.com/ebisenttt',
	},
	{
		name: 'masaya',
		img: 'masaya.jpg',
		faIconClass: null,
		rarity: 'C',
		countryIcon: './img/japan.svg',
		countryName: 'Japan',
		description: '脱！初心者みくじ開発者',
		quote:
			'Don\'t snivel, it\'ll do nothing to impede the flight of a bullet.',
		twitterUrl: 'https://twitter.com/StudyEng_NetF',
	},
	{
		name: 'koki_cs',
		faIconClass: null,
		img: 'cat-in-sunglasses-icon-vector-35392116.jpg',
		rarity: 'C',
		countryIcon: './img/japan.svg',
		countryName: 'Japan',
		description: '脱！初心者みくじ開発者',
		quote:
			'Compare yourself to who you were yesterday, not to someone else is today.',
		twitterUrl: 'https://twitter.com/koki_cs',
	},
	{
		name: 'Linus Torvalds',
		faIconClass: 'fa-linux',
		img: null,
		rarity: 'S',
		countryIcon: './img/finland.svg',
		countryName: 'Finland',
		description:
			'主にサーバー用のOSであるLinuxの開発者。バージョン管理システムGitも彼の手によって作られた。',
		quote:
			'Most good programmers do programming not because they expect to get paid or get adulation by the public, but because it is fun to program.',
		twitterUrl: '',
	},
	{
		name: 'Mark Zuckerberg',
		faIconClass: 'fa-facebook',
		img: null,
		rarity: 'A',
		countryIcon: './img/unitedstates.svg',
		countryName: 'United States',
		description:
			'旧Facebook(現:Meta)の創設者。ハーバード大学在学中にFacebookの前身となるアプリを開発。',
		quote:
			'Move fast and break things. Unless you are breaking stuff, you are not moving fast enough.',
		twitterUrl: '',
	},
	{
		name: 'Bill Gates',
		faIconClass: 'fa-microsoft',
		img: null,
		rarity: 'A',
		countryIcon: './img/unitedstates.svg',
		countryName: 'United States',
		description: 'Microsoftの創設者。ハーバード大学在学中にプログラミング言語BASICを初代マイクロコンピュータ用に開発',
		quote:
			'Software is a great combination between Artistry & Engineering.',
		twitterUrl: '',
	},
	{
		name: 'Dennis Ritchie',
		faIconClass: 'fa-c',
		img: null,
		rarity: 'S',
		countryIcon: './img/unitedstates.svg',
		countryName: 'United States',
		description:
			'C言語の開発者。Ken Thompsonと共に最古のOSであるUnixの開発にも従事した。',
		quote:
			'The only way to learn a new programming language is by writing programs in it.',
		twitterUrl: '',
	},
	{
		name: 'James Gosling',
		faIconClass: 'fa-java',
		img: null,
		rarity: 'B',
		countryIcon: './img/canada.svg',
		countryName: 'Canada',
		description: 'オブジェクト指向プログラミング言語Javaの開発者',
		quote:
			'If you want to write the software to control the national medical system of a large country, Java is perfect.',
		twitterUrl: '',
	},
	{
		name: 'Guido van Rossum',
		faIconClass: 'fa-python',
		img: null,
		rarity: 'B',
		countryIcon: './img/netherlands.svg',
		countryName: 'Netherlands',
		description: 'Python言語の生みの親',
		quote: '',
		twitterUrl: '',
	},
	{
		name: 'Tim Berners-Lee',
		faIconClass: 'fa-html5',
		img: null,
		rarity: 'A',
		countryIcon: './img/unitedkingdom.svg',
		countryName: 'United Kingdom',
		description: 'HTML,URL,HTTPの基を築いた人物',
		quote: '',
		twitterUrl: '',
	},
	{
		name: 'Ken Thompson',
		faIconClass: 'fa-golang',
		img: null,
		rarity: 'A',
		countryIcon: './img/unitedstates.svg',
		countryName: 'United States',
		description:
			'Go言語を開発した3人の内の1人。Dennis Ritchieと共にUnixオペレーティングシステムの開発に従事。',
		quote: '',
		twitterUrl: '',
	},
	{
		name: 'Larry Page',
		faIconClass: 'fa-google',
		img: null,
		rarity: 'B',
		countryIcon: './img/unitedstates.svg',
		countryName: 'United States',
		description: 'Googleの創設者',
		quote: '',
		twitterUrl: '',
	},
	{
		name: 'Drew Houston',
		faIconClass: 'fa-dropbox',
		img: null,
		rarity: 'C',
		countryIcon: './img/unitedstates.svg',
		countryName: 'United States',
		description: 'Dropboxの創設者',
		quote: '',
		twitterUrl: '',
	},
	{
		name: 'Rasmus Lerdorf',
		faIconClass: 'fa-php',
		img: null,
		rarity: 'C',
		countryIcon: './img/canada.svg',
		countryName: 'Canada',
		description: 'PHP言語の開発者',
		quote: '',
		twitterUrl: '',
	},
	{
		name: 'Steve Jobs',
		faIconClass: 'fa-apple',
		img: null,
		rarity: 'B',
		countryIcon: './img/unitedstates.svg',
		countryName: 'United States',
		description: 'Appleの創設者',
		quote: '',
		twitterUrl: '',
	},
];
