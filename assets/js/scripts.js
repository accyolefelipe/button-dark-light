const darkModeClass = 'dark-mode';

const button = document.getElementById('mode-selector');
button.addEventListener('click', changeMode);

const h1 = document.getElementById('page-title');
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];

function changeMode(){
  changeClasses(); 
  changeTexts();
}

function changeClasses(){
    button.classList.toggle(darkModeClass);
    h1.classList.toggle(darkModeClass);
    body.classList.toggle(darkModeClass);
    footer.classList.toggle(darkModeClass);
}

function changeTexts(){
    const lightModeText = 'Light Mode';
    const darkModeText = 'Dark Mode'

    if(body.classList.contains(darkModeClass)){
        h1.innerHTML = `${darkModeText} ON`;
        button.innerHTML = lightModeText;
        return;
    }
    h1.innerHTML = `${lightModeText} ON`;
    button.innerHTML = darkModeText;
}