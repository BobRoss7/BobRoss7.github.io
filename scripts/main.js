let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/barry.jpg') {
      myImage.setAttribute ('src','images/hader.jpg');
    } else {
      myImage.setAttribute ('src','images/barry.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h2');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName || myName === null) {
        setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.textContent = '5 reasons why you should watch Barry, ' + myName + ':';
    }
  }
  
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = '5 reasons why you should watch Barry, ' + storedName + ':';
}

myButton.onclick = function() {
    setUserName();
}

