const randomDurationMilliSec = () => Math.floor(Math.random() * 20000) + 10000;

const randomPositionY = () => window.innerHeight * Math.random() - 200;

const randomAnimation = () => {
	const randY = `${randomPositionY()}px`;
	const keyframes = [
		{ transform: `translateX(-${window.innerWidth}px) translateY(${randY})` },
		{ transform: `translateX(${window.innerWidth}px) translateY(${randY})` },
	];
	const detail = {
		duration: randomDurationMilliSec(),
		direction: 'alternate',
		iterations: Infinity,
	};

	return {
		keyframes: keyframes,
		detail: detail,
	};
};
