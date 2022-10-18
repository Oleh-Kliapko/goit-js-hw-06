const inputValidation = document.querySelector("#validation-input");

inputValidation.addEventListener("blur", onLostFocus);

function onLostFocus(event) {
  inputValidation.classList.remove("invalid");
  if (inputValidation.value.length === Number(inputValidation.dataset.length)) {
    inputValidation.classList.add("valid");
  } else {
    inputValidation.classList.add("invalid");
  }
}
