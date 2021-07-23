export const formInputs = [{
    input: "select",
    options: ["--select--", "small", "medium", "Large"],
    name: "size",
    label: "Choice of Size Required"
},
{
    input: "radio",
    options: ["originalRed", "garlicRanch", "bBQSauce", "spinachAlfredo"],
    name: "sauce",
    label: "Choice of Sauce Required"
},
{
    input: "checkbox",
    options: ["Pepperoni", "Sausage", "Canadian Bacon", "Spicy Italian Sausage", "Grilled Chicken", "Onions", "Green Pepper", "Diced Tomatos", "Black Olives", "Roasted Garlic", "Artichoke Hearts", "Three Cheese", "Pineapple", "Extra Cheese"],
    name: "toppings",
    label: "Add Toppings Choose up to 10."
},
{
    input: "checkbox",
    options: ["Gluten Free Crust (+ $1.00)"],
    name: "glutenFree",
    label: "Choice of Substitute Choose up to 1"
},
{
    input: "text",
    placeHolder: "Anything else you'd like to add?",
    name: "specialInstructions",
    label: "Special Instructions"
},]