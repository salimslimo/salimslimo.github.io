let myImage = document.querySelector('img');

myImage.addEventListener('click', function(){
    let mySrc = myImage.getAttribute('src');
    
    if(mySrc === './images/logo-sm-high-res.3d9087ac44e8.png'){
        myImage.setAttribute('src', './images/batman-icon.png');
    }
    else{
        myImage.setAttribute('src', './images/logo-sm-high-res.3d9087ac44e8.png');
    }
});

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName(){
    let myName = prompt('Veuillez saisir votre nom');
    localStorage.setItem('nom', myName);
    myHeading.textContent = 'Mozilla is cool, ' + myName;
}

if(!localStorage.getItem('nom')){
    setUserName();
}
else{
    let storedName = localStorage.getItem('nom');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

myButton.addEventListener('click', function(){
    setUserName();
});