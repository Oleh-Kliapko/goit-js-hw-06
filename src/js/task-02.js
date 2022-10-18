const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const makeIngredientsEl = (ingredients) => {
  return ingredients.map((ingredient) => {
    const makeListEl = document.createElement("li");
    makeListEl.classList.add("item");
    makeListEl.textContent = ingredient;

    return makeListEl;
  });
};

const elementsByFunction = makeIngredientsEl(ingredients);

const ingredientsElByFunction = document.querySelector("#ingredients");
ingredientsElByFunction.append(...elementsByFunction);
