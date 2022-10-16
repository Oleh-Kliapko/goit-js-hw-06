const refs = {
  bodyEl: document.querySelector("body"),
  hexColorText: document.querySelector(".color"),
  buttonChangeColor: document.querySelector(".change-color"),
};

refs.buttonChangeColor.addEventListener("click", onClickButton);

function onClickButton(event) {
  refs.bodyEl.style.backgroundColor = getRandomHexColor();
  refs.hexColorText.textContent = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
