const textInput = document.querySelector("#font-size-control");
const text = document.querySelector("#text");


text.style.fontSize = textInput.value + "px";

function changeSize() {
  text.style.fontSize = `${textInput.value}px`;
}

textInput.addEventListener("input", changeSize);