


function generatePassword() {

// Initializing the variables
	let returnPassword = ""
	let passwordWords = "qwertyuiopasdfghjklzxcvbnm1234567890!@#$%^&*()_+"
let passwordLength = document.getElementById("passwordLength").value;

// Validation the form
if (Number(passwordLength)>35) {
	alert("Password length must be between 1 - 35");
	return false;
}

// Looping for getting the random password
	for (i = 1; i <= passwordLength; i++) {
		let letter = passwordWords.charAt(Math.floor(Math.random() * passwordWords.length))
		returnPassword += letter;
	}
	console.log(returnPassword)

	// Showing the randomly generated password in the DOM
	let resultDiv = document.getElementById("result")
	resultDiv.style.display = "block";
	let returnHTML = `<h2 style="font-size: 25px">Your Password: </h2><br> <p style="font-size: 22px">${returnPassword}</p>`;
	resultDiv.innerHTML = returnHTML
}

