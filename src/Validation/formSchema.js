import * as yup from 'yup';

export default yup.object().shape({
    size: yup.string().required("A size is required."),
    name: yup.string().required("your name is required.").min(2, "name must be at least 2 characters"),
    pepperoni: yup.boolean(),
    dicedTomatos: yup.boolean(),
    sausage: yup.boolean(),
    blackOlives: yup.boolean(),
    canadianBacon: yup.boolean(),
    roastedGarlic: yup.boolean(),
    spicyItalianSausage: yup.boolean(),
    artichokeHearts: yup.boolean(),
    grilledChicken: yup.boolean(),
    threeCheese: yup.boolean(),
    onions: yup.boolean(),
    pineapple: yup.boolean(),
    greenPepper: yup.boolean(),
    extraCheese: yup.boolean(),
    glutenFreeCrust: yup.boolean(),
    specialInstructions: yup.string()
})