import TopImage from "../Components/TopImage";

export default function PizzaForm (props) {
    const { formValues, onChangeHandler, onSubmit } = props;
    return (
        <div>
            <h2>Build Your Own Pizza</h2>
            <TopImage button={false} img={"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-homemade-pizza-horizontal-1542312378.png"}/>
            <h2>Build Your Own Pizza</h2>
            <form id="pizza-form">
                <label htmlFor="size">Choice of Size Required</label>

                <select value={formValues.size} onChange={onChangeHandler} name="size" id="size-dropdown">
                    <option value="">--Select--</option>
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                </select>



                <input onChange={onChangeHandler} type="radio" name="sauce" value={`${formValues.sauce}`}/>
                <label htmlFor="sauce">Original Red</label>

                <input onChange={onChangeHandler} type="radio" name="sauce" value={`${formValues.sauce}`}/>
                <label htmlFor="sauce">Garlic Ranch</label>

                <input onChange={onChangeHandler} type="radio" name="sauce" value={`${formValues.sauce}`}/>
                <label htmlFor="sauce">BBQ Sauce</label>

                <input onChange={onChangeHandler} type="radio" name="sauce" value={`${formValues.sauce}`}/>
                <label htmlFor="sauce">Spinach Alfredo</label>



                <input onChange={onChangeHandler} type="checkbox" id="pepperoni" name="pepperoni" value={`${formValues.pepperoni}`} />
                <label htmlFor="pepperoni">Pepperoni</label>

                <input onChange={onChangeHandler} type="checkbox" id="dicedTomatos" name="dicedTomatos" value={`${formValues.dicedTomatos}`} />
                <label htmlFor="dicedTomatos">Diced Tomatos</label>

                <input onChange={onChangeHandler} type="checkbox" id="sausage" name="sausage" value={`${formValues.sausage}`} />
                <label htmlFor="sausage">Sausage</label>
                
                <input onChange={onChangeHandler} type="checkbox" id="blackOlives" name="blackOlives" value={`${formValues.blackOlives}`} />
                <label htmlFor="blackOlives">Black Olives</label>

                <input onChange={onChangeHandler} type="checkbox" id="canadianBacon" name="canadianBacon" value={`${formValues.canadianBacon}`} />
                <label htmlFor="canadianBacon">Canadian Bacon</label>

                <input onChange={onChangeHandler} type="checkbox" id="roastedGarlic" name="roastedGarlic" value={`${formValues.roastedGarlic}`} />
                <label htmlFor="roastedGarlic">Roasted Garlic</label>

                <input onChange={onChangeHandler} type="checkbox" id="spicyItalianSausage" name="spicyItalianSausage" value={`${formValues.spicyItalianSausage}`} />
                <label htmlFor="spicyItalianSausage">Spicy Italian Sausage</label>

                <input onChange={onChangeHandler} type="checkbox" id="artichokeHearts" name="artichokeHearts" value={`${formValues.artichokeHearts}`} />
                <label htmlFor="artichokeHearts">Artichoke Hearts</label>

                <input onChange={onChangeHandler} type="checkbox" id="grilledChicken" name="grilledChicken" value={`${formValues.grilledChicken}`} />
                <label htmlFor="grilledChicken">Grilled Chicken</label>

                <input onChange={onChangeHandler} type="checkbox" id="threeCheese" name="threeCheese" value={`${formValues.threeCheese}`} />
                <label htmlFor="threeCheese">Three Cheese</label>

                <input onChange={onChangeHandler} type="checkbox" id="onions" name="onions" value={`${formValues.onions}`} />
                <label htmlFor="onions">Onions</label>

                <input onChange={onChangeHandler} type="checkbox" id="pineapple" name="pineapple" value={`${formValues.pineapple}`} />
                <label htmlFor="pineapple">Pineapple</label>

                <input onChange={onChangeHandler} type="checkbox" id="greenPepper" name="greenPepper" value={`${formValues.greenPepper}`} />
                <label htmlFor="greenPepper">Green Pepper</label>

                <input onChange={onChangeHandler} type="checkbox" id="extraCheese" name="extraCheese" value={`${formValues.extraCheese}`} />
                <label htmlFor="extraCheese">Extra Cheese</label>



                <input onChange={onChangeHandler} type="checkbox" id="glutenFreeCrust" name="glutenFreeCrust" value={`${formValues.glutenFreeCrust}`} />
                <label htmlFor="glutenFreeCrust">Gluten Free Crust</label>

                <input onChange={onChangeHandler} type="text" id="special-text" name="specialInstructions" placeholder="Anything else you'd like to add?" value={`${formValues.specialInstructions}`}/>

                <input onChange={onChangeHandler} type="text" id="name-input" name="name" placeholder="Name" value={`${formValues.name}`}/>

                <button id="order-button" onClick={onSubmit}>Add to Order</button>
            </form>
        </div>
    )
}