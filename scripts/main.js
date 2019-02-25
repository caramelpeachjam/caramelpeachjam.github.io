var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/666.jpg') {
      myImage.setAttribute ('src','images/15.jpg');
    } else {
      myImage.setAttribute ('src','images/666.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
var rarara = 'privet ';

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.innerHTML  = rarara + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML  = rarara + storedName;
}

myButton.onclick = function() {
  setUserName();
}
