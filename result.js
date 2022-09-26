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

function insertRandomTechInfo() {
	const techIcon = document.getElementById('tech-icon');
	const techImg = document.getElementById('tech-image');
	const techName = document.getElementById('tech-name');
	const techDescription = document.getElementById('tech-description');

	const tech = randomTech();
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
	insertRandomTechInfo();
};

const __TECH_LIST__ = [
	{
		name: 'ebisenttt',
		img: 'ebisenttt.png',
		faIconClass: null, //twitterのロゴ等
		rarity: 'C',
		countryIcon: './img/japan.svg',
		countryName: 'Japan',
		description: '脱！初心者みくじ開発者',
		quote: 'Everything happens for a reason.',
		twitterUrl: 'https://twitter.com/ebisenttt',
	},
	{
		name: '', //masayaさん
		img: null,
		faIconClass: '', //twitterのロゴ等
		rarity: '', //レア度
		countryIcon: './img/japan.svg',
		countryName: 'Japan',
		description: '脱！初心者みくじ開発者',
		quote: '', //好きな格言
		twitterUrl: '', //twitterアカウント
	},
	{
		name: 'koki_cs',
		faIconClass: null,
		img: 'cat-in-sunglasses-icon-vector-35392116.jpg', //プルリク時、相談
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
			'主にサーバーで使われているOSであるLinuxの開発者。現在多くの開発現場で使用されているバージョン管理システムであるGitも彼の手によって作られた。',
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
			'旧Facebook(現:Meta)の創設者。ハーバード大学在学中にFacebookをリリース。',
		quote: 'Done is better than perfect.',
		twitterUrl: '',
	},
	{
		name: 'Bill Gates',
		faIconClass: 'fa-microsoft',
		img: null,
		rarity: 'A',
		countryIcon: './img/unitedstates.svg',
		countryName: 'United States',
		description: 'Microsoftの創設者',
		quote: '',
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
			'C言語の生みの親。Ken Thompsonと共にUnixオペレーティングシステムの開発にも従事した。',
		quote: '',
		twitterUrl: '',
	},
	{
		name: 'James Gosling',
		faIconClass: 'fa-java',
		img: null,
		rarity: 'B',
		countryIcon: './img/canada.svg',
		countryName: 'Canada',
		description: 'Java言語の開発者',
		quote: '',
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
