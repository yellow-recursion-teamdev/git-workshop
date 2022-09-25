function addIcons() {
	const techIconClasses = techIconClassesInLocalStorage();
	console.log(techIconClasses);
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
			console.log(anime.keyframes, anime.detail);
			return icon;
		});

	const main = document.getElementsByTagName('main')[0];
	icons.forEach((icon) => {
		main.appendChild(icon);
	});
}

const techIconClassesInLocalStorage = () => {
	let iconClasses = [];
	for (const key in localStorage) {
		const val = localStorage[key];
		if (typeof val === 'string' && val.substring(0, 3) === 'fa-') {
			iconClasses.push(val);
		}
	}
	return iconClasses;
};

window.onload = (e) => {
	addIcons();
};
