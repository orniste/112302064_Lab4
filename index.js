const drumButtons = document.querySelectorAll('.drum');

function playSound(key){
	const audioMap ={
		'w':'sounds/crash.mp3',
		'a':'sounds/kick-bass.mp3',
		's':'sounds/snare.mp3',
		'd':'sounds/tom-1.mp3',
		'j':'sounds/tom-2.mp3',
		'k':'sounds/tom-3.mp3',
		'l':'sounds/tom-4.mp3'
	};

	const soundFile = audioMap[key]
	if (soundFile) {
		const audio = new Audio(soundFile);
		audio.play();
	}
}

function animateButton(key){
	const activeButton = document.querySelector(`.${key}`);
	if(activeButton){
		activeButton.classList.add('pressed');
		setTimeout(()=> {
			activeButton.classList.remove('pressed');
		}, 100);
	}
}

drumButtons.forEach(button =>{
	button.addEventListener('click',() => {
		const buttonKey = button.innerHTML.toLowerCase();
		playSound(buttonKey);
		animateButton(buttonKey);
	});
});

document.addEventListener('keydown', event =>{
	playSound(event.key);
	animateButton(event.key);
});
