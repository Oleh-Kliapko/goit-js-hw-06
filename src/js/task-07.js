const refs = {
  inputEl: document.querySelector("#font-size-control"),
  textEl: document.querySelector("#text"),
};

refs.textEl.style.fontSize = `${refs.inputEl.value}px`;

console.log("🚀 ~ refs.inputEl.value", refs.inputEl.value);
refs.inputEl.addEventListener("input", (event) => {
  refs.textEl.style.fontSize = `${refs.inputEl.value}px`;
});
