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
