class Tech {
	constructor(name, faIconClass, developer, description, rarelity) {
		this.name = name;
		this.faIconClass = faIconClass;
		this.developer = developer;
		this.description = description;
		this.rarelity = rarelity;
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
