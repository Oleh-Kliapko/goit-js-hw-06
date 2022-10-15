const refs = {
  incrementBtn: document.querySelector('[data-action="increment"]'),
  decrementBtn: document.querySelector('[data-action="decrement"]'),
  value: document.querySelector("#value"),
};

let changeValue = 0;

refs.decrementBtn.addEventListener("click", onDecrementBtn);
refs.incrementBtn.addEventListener("click", onIncrementBtn);

function onDecrementBtn(event) {
  console.log(refs.value.textContent);
  refs.value.textContent = changeValue -= 1;
}

function onIncrementBtn(event) {
  console.log(refs.value.textContent);
  refs.value.textContent = changeValue += 1;
}
