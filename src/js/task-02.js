const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

//*************** Old school *********************//
const elementsOld = [];

for (let i = 0; i < ingredients.length; i += 1) {
  const makeListEl = document.createElement("li");
  makeListEl.classList.add("item");
  makeListEl.textContent = ingredients[i];
  elementsOld.push(makeListEl);
}
const oldSchool = document.createElement("h2");
oldSchool.textContent = "Old School";
const ingredientsElOld = document.querySelector("#ingredients");
ingredientsElOld.append(oldSchool, ...elementsOld);
console.log(ingredientsElOld);

//*************** New approach *********************//
const elements = ingredients.map((ingredient) => {
  const makeListEl = document.createElement("li");
  makeListEl.classList.add("item");
  makeListEl.textContent = ingredient;

  return makeListEl;
});

const newApproach = document.createElement("h2");
newApproach.textContent = "New approach";
const ingredientsEl = document.querySelector("#ingredients");
ingredientsEl.append(newApproach, ...elements);
console.log(ingredientsEl);

//*************** New approach using function *********************//

const makeIngredientsEl = (ingredients) => {
  return ingredients.map((ingredient) => {
    const makeListEl = document.createElement("li");
    makeListEl.classList.add("item");
    makeListEl.textContent = ingredient;

    return makeListEl;
  });
};

const elementsByFunction = makeIngredientsEl(ingredients);
const newApproachByFunction = document.createElement("h2");
newApproachByFunction.textContent = "New approach by function";
const ingredientsElByFunction = document.querySelector("#ingredients");
ingredientsElByFunction.append(newApproachByFunction, ...elementsByFunction);
console.log(ingredientsElByFunction);
