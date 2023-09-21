import React, { useEffect } from 'react';
import './Eye.css';

const Eye = (props) => {
	useEffect(
		() => {
			const eyeInput = document.getElementById(`trackingDiv`);
			const pupil = document.getElementById(`pupil-${props.uniqueId}`);

			if (!eyeInput || !pupil) {
				return;
			}

			const handleMouseMove = (e) => {
				const { clientX: mouseX, clientY: mouseY } = e;
				const { left, top, width, height } = eyeInput.getBoundingClientRect();
				const eyeX = left + width / 2;
				const eyeY = top + height / 2;

				const deltaX = mouseX - eyeX;
				const deltaY = mouseY - eyeY;

				const maxDistanceX = width / 20;
				const maxDistanceY = height / 4;

				const pupilX = deltaX / width * maxDistanceX;
				const pupilY = deltaY / height * maxDistanceY;

				pupil.style.transform = `translate(-50%, -50%) translate(${pupilX}px, ${pupilY}px)`;
			};

			const blink = () => {
				pupil.style.transform = 'translate(-50%, -50%) scale(1, 0.1)';
				setTimeout(() => {
					pupil.style.transform = 'translate(-50%, -50%) scale(1, 1)';
				}, 200);
			};

			eyeInput.addEventListener('mousemove', handleMouseMove);

			const blinkInterval = setInterval(blink, 4000);

			return () => {
				eyeInput.removeEventListener('mousemove', handleMouseMove);
				clearInterval(blinkInterval);
			};
		},
		[ props.uniqueId ]
	);

	return (
		<div className="eye-input" id={`eyeInput-${props.uniqueId}`}>
			<div className="eye" id={`eye-${props.uniqueId}`}>
				<div className="pupil" id={`pupil-${props.uniqueId}`} />
			</div>
		</div>
	);
};

export default Eye;
