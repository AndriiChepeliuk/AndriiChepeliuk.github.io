var myImage = document.querySelector('img');
// var imageFolder = 'images/';
// var imageList = imageFolder.

myImage.onclick = function () {
    var mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/foto-1.jpg') {
        myImage.setAttribute('src', 'images/foto-2.jpg');
    }
    else {
        myImage.setAttribute('src', 'images/foto-1.jpg');
    }
}

var myButton = document.querySelector('button');

var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please enter your name. ');
    localStorage.setItem('name', myName);
    myHeading.text
    Content = 'VW Golf VII for ' + myName;
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'VW Golf VII for ' + storedName;
}

myButton.onclick = function() {
    setUserName();
    window.location.reload(true);
}
