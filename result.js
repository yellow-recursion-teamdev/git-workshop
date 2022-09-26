class Tech {
	constructor(
		name,
		faIconClass,
		rarity,
		countryIcon,
		countryName,
		description,
		quote,
		twitterUrl
	) {
		this.name = name;
		this.faIconClass = faIconClass;
		this.rarity = rarity;
		this.countryIcon = countryIcon;
		this.countryName = countryName;
		this.description = description;
		this.quote = quote;
		this.twitterUrl = twitterUrl;
	}
}

const randomInt = (maxInt) => {
	return Math.floor(Math.random() * maxInt);
};

const randomRarelity = () => {
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
	const techList = [
		{
			name: 'a',
			faIconClass: 'fa-facebook',
			developer: 'a dev',
			description: 'a desc',
			rarelity: 'S',
		},
		{
			name: 'b',
			faIconClass: 'fa-twitter',
			developer: 'b dev',
			description: 'b desc',
			rarelity: 'A',
		},
		{
			name: 'c',
			faIconClass: 'fa-instagram',
			developer: 'c dev',
			description: 'c desc',
			rarelity: 'B',
		},
		{
			name: 'd',
			faIconClass: 'fa-tiktok',
			developer: 'd dev',
			description: 'd desc',
			rarelity: 'C',
		},
	];

	const techs = techList.map(
		(tech) =>
			new Tech(
				tech.name,
				tech.faIconClass,
				tech.developer,
				tech.description,
				tech.rarelity
			)
	);
	const rarelity = randomRarelity();
	const oneRarelityTechs = techs.filter((tech) => tech.rarelity === rarelity);
	if (!oneRarelityTechs.length) {
		console.log(Error('該当するレアリティのTechが見つかりませんでした'));
		return techList[0];
	}
	const randomIndex = randomInt(oneRarelityTechs.length - 1);
	return oneRarelityTechs[randomIndex];
};

function insertRandomTechInfo() {
	const techIcon = document.getElementById('tech-icon');
	const techName = document.getElementById('tech-name');
	const techDescription = document.getElementById('tech-description');

	const tech = randomTech();
	console.log(tech);
	techIcon.classList.add(tech.faIconClass);
	techName.innerText = tech.name;
	techDescription.innerText = tech.description;
}

window.onload = (e) => {
	insertRandomTechInfo();
};

const techList = [
	{
		name: 'ebisenttt',
		faIconClass: '', //twitterのロゴ等
		rarity: 'C',
		countryIcon: './img/japan.svg',
		countryName: 'Japan',
		description: '脱！初心者みくじ開発者',
		quote: 'Everything happens for a reason.',
		twitterUrl: 'https://twitter.com/ebisenttt',
	},
	{
		name: '', //masayaさん
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
		faIconClass: 'cat-in-sunglasses-icon-vector-35392116.jpg', //プルリク時、相談
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
		rarity: 'B',
		countryIcon: './img/unitedstates.svg',
		countryName: 'United States',
		description: 'Appleの創設者',
		quote: '',
		twitterUrl: '',
	},
];
