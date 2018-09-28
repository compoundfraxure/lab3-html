'use strict';

function pwdValidate() {
	let password1 = document.getElementById('pwd1');
	let password2 = document.getElementById('pwd2');

	if (password1.value != password2.value) {
		window.alert("Your passwords do not match! Please try again!");
	}
	else if (password1.value.length < 8 || password2.value.length < 8) {
		window.alert("Your password is too short! Please try again with a password of more than 8 characters!");
	}
	else {
		return null;
	}
}

function prevSlide() {
	let pictures = ["img/image0.png", "img/image1.png", "img/image2.jpg", "img/image3.jpg", "img/image4.gif"];
	let imgCurrent = document.getElementById('show');
	let posCurrent = pictures.indexOf((imgCurrent.src).substr(-14));
	if (posCurrent == 0) {
		imgCurrent.src = pictures[4];
	}
	else {
		posCurrent = posCurrent - 1;
		imgCurrent.src = pictures[posCurrent];
	}
}

function nextSlide() {
	let pictures = ["img/image0.png", "img/image1.png", "img/image2.jpg", "img/image3.jpg", "img/image4.gif"];
	let imgCurrent = document.getElementById('show');
	let posCurrent = pictures.indexOf(imgCurrent.src.substr(-14));
	if (posCurrent == 4) {
		imgCurrent.src = pictures[0];
	}
	else {
		posCurrent = posCurrent + 1;
		imgCurrent.src = pictures[posCurrent];
	}
}

function restyle() {
	let borderColor = [];
	let backgroundColor = [];
	let borderWidth = document.getElementById("borderWidth").value;
	
	borderColor[0] = document.getElementById("borderRed").value;
	borderColor[1] = document.getElementById("borderGreen").value;
	borderColor[2] = document.getElementById("borderBlue").value;
	
	backgroundColor[0] = document.getElementById("backgroundRed").value;
	backgroundColor[1] = document.getElementById("backgroundGreen").value;
	backgroundColor[2] = document.getElementById("backgroundBlue").value;
	
	document.getElementById("modifiable").style.borderWidth = "" + borderWidth + "px";
	document.getElementById("modifiable").style.borderColor = "rgb(" + borderColor[0] + ", " + borderColor[1] + ", " + borderColor[2] + ")";
	document.getElementById("modifiable").style.backgroundColor = "rgb(" + backgroundColor[0] + ", " + backgroundColor[1] + ", " + backgroundColor[2] + ")";
}