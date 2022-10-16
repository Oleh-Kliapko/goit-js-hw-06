const refs = {
  inputName: document.querySelector("#name-input"),
  outputName: document.querySelector("#name-output"),
};
console.log(refs.inputName);
refs.inputName.addEventListener("input", onOutputName);
const outputDefault = refs.outputName.textContent;

function onOutputName(event) {
  if (event.currentTarget.value !== "") {
    refs.outputName.textContent = event.currentTarget.value;
  } else {
    refs.outputName.textContent = outputDefault;
  }
}
