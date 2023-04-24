const inputText = document.querySelector(`#validation-input`);



inputText.addEventListener("blur", () => {
  if (inputText.value.length < +inputText.dataset.length) {
    inputText.classList.add(`invalid`);
  }
  else {
    inputText.classList.toggle(`invalid`);
    inputText.classList.add("valid");
  }
});

