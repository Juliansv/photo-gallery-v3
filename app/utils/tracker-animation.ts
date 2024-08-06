export function addInteractivityToImageTrack() {
	const track = document.getElementById("image-track");
	if (!track) return;

	const animateElement = (
		elementId: string,
		keyframes: Keyframe[] | PropertyIndexedKeyframes | null,
		options: number | KeyframeAnimationOptions | undefined
	) => {
		const element = document.getElementById(elementId);
		element?.animate(keyframes, options);
	};

	const updateHeroSection = (nextPercentage: number) => {
		animateElement(
			"hero-section",
			{
				transform: `translateX(-${nextPercentage * 2}%)`,
				opacity: 1 - nextPercentage / 5,
			},
			{ duration: 1200, fill: "forwards" }
		);
	};

	const updateInfoSection = (nextPercentage: number) => {
		animateElement(
			"info-section",
			{
				transform: `translateX(${98 - nextPercentage}%)`,
				opacity: (nextPercentage - 94) * 0.2,
			},
			{ duration: 1200, fill: "forwards" }
		);
	};

	const updateCounter = (nextPercentage: number) => {
		const bottomCounter = document.getElementById("bottom-counter");
		if (!bottomCounter) return;

		const shouldHideCounter = nextPercentage === 0 || nextPercentage > 99;
		bottomCounter.animate(
			{ opacity: shouldHideCounter ? 0 : 1 },
			{ duration: 500, fill: "forwards" }
		);

		const counter = document.getElementById("counter");
		if (!counter) return;

		let counterValue = Math.floor(nextPercentage / 10) + 1;
		counterValue = Math.min(counterValue, 10);

		if (counterValue === Number(counter.innerHTML)) return;

		counter.animate({ opacity: 0 }, { duration: 500, fill: "forwards" });
		setTimeout(() => {
			counter.innerHTML = counterValue.toString();
			counter.animate(
				{ opacity: 1 },
				{ duration: 500, fill: "forwards" }
			);
		}, 100);
	};

	const updateTrackAndImages = (nextPercentage: number) => {
		track.dataset.percentage = nextPercentage.toString();
		track.dataset.prevPercentage = nextPercentage.toString();

		track.animate(
			{ transform: `translate(-${nextPercentage}%, -50%)` },
			{ duration: 1200, fill: "forwards" }
		);

		for (const image of track.getElementsByClassName("image")) {
			image.animate(
				{ objectPosition: `${nextPercentage}% 50%` },
				{ duration: 1200, fill: "forwards" }
			);
		}
	};

	const clampPercentage = (percentage: number) =>
		Math.min(Math.max(percentage, 0), 100);

	const handleMouseMove = (e: MouseEvent) => {
		const { currentPercentage, prevPercentage } = track.dataset;
		if (!currentPercentage || !prevPercentage || currentPercentage === "0")
			return;

		const mouseDelta = parseFloat(currentPercentage) - e.clientX;
		const maxDelta = window.innerWidth / 0.5;
		const percentage = (mouseDelta / maxDelta) * -10;
		const nextPercentage = clampPercentage(
			parseFloat(prevPercentage) + percentage
		);

		updateTrackAndImages(nextPercentage);
		updateHeroSection(nextPercentage);
		updateInfoSection(nextPercentage);
		updateCounter(nextPercentage);
	};

	const handleWheel = (e: WheelEvent) => {
		const delta = Math.sign(e.deltaY);
		const nextPercentage = clampPercentage(
			parseFloat(track.dataset.percentage || "0") + delta / 2
		);

		updateTrackAndImages(nextPercentage);
		updateHeroSection(nextPercentage);
		updateInfoSection(nextPercentage);
		updateCounter(nextPercentage);
	};

	const handleKeyDown = (e: KeyboardEvent) => {
		if (e.key === "ArrowDown" || e.key === "ArrowUp") {
			const delta = e.key === "ArrowDown" ? 1 : -1;
			const nextPercentage = clampPercentage(
				parseFloat(track.dataset.percentage || "0") + delta
			);

			updateTrackAndImages(nextPercentage);
			updateHeroSection(nextPercentage);
			updateInfoSection(nextPercentage);
			updateCounter(nextPercentage);
		}
	};

	window.onmousedown = (e) =>
		(track.dataset.currentPercentage = e.clientX.toString());
	window.onmouseup = () => (track.dataset.currentPercentage = "0");
	window.onmousemove = handleMouseMove;
	window.addEventListener("wheel", handleWheel);
	window.addEventListener("keydown", handleKeyDown);
}
