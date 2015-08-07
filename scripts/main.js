var myImage = document.querySelector('img');

//empty function that is called when the image is clicked
myImage.onclick = function() {

	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/corgi.jpg') {
		myImage.setAttribute('src', 'images/corgi2.jpg');
	}
	else {
		myImage.setAttribute('src', 'images/corgi.jpg');
	}
}

//saves a reference to the h1 selector an stores it in the variable
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name. ');

  //local Storage is an API that allows us to store data in the browser and 
  //retrieve it later on
  localStorage.setItem('name', myName);
  
  //innerhtml represents the content of the reference
  myHeading.innerHTML = 'Hello there corgi lover ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
}
else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Hello there corgi lover ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
