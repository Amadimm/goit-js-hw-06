

const bodyColor = document.body;
const buttonChangeColor = document.querySelector(`.change-color`);
const color =  document.querySelector(`.color`);


function getRandomHexColor () {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};


  buttonChangeColor.addEventListener(`click`,  () => {
    bodyColor.style.backgroundColor = getRandomHexColor();
    color.textContent = getRandomHexColor() ;
  });