import React, { useEffect, useState } from "react";
import { Switch, Route} from "react-router-dom";
import Header from "./Components/Header";
import HomePage from "./Pages/HomePage";
import CompletedOrder from "./Pages/CompletedOrder";
import PizzaForm from "./Pages/PizzaForm";
import { galleryList } from "./Data/dummydata";
import axios from "axios";


const App = () => {
  const defaultForm = {
    size: '',
    sauce: '',
    pepperoni: false,
    dicedTomatos: false,
    sausage: false,
    blackOlives: false,
    canadianBacon: false,
    roastedGarlic: false,
    spicyItalianSausage: false,
    artichokeHearts: false,
    grilledChicken: false,
    threeCheese: false,
    onions: false,
    pineapple: false,
    greenpepper: false,
    extraCheese: false,
    glutenFreeCrust: false,
    specialInstructions: '',
    name: ''
  }
  const [formValues, setFormValues] = useState(defaultForm);

  function onChangeHandler(e) {
    const { name, value, checked, type} = e.target;
    const valueToChange = type === 'text' || type === 'select-one' ? value : checked;
    console.log(e.target.type)
    // setFormErrors(name, valueToChange); //Call setFormErrors with the name of the event, and the value to use (use) or (checked);
    setFormValues({ ...formValues, [name]: valueToChange}); //Pass in a copy of the current form values, the updated key, and value.
    console.log(formValues);
  }
 
  function onSubmit(e) {
    e.preventDefault();

    axios.post("https://reqres.in/api/orders", formValues)
      .then(res => {
        console.log(res);
        setFormValues(defaultForm);
      })
      .catch(err => console.log(err));
  }

  return (
    <div>
      <Header />

      <Switch>
        <Route path="/pizza">
          <PizzaForm formValues={formValues} onSubmit={onSubmit} onChangeHandler={onChangeHandler}/>
        </Route>

        <Route path="/completed-order">
          <CompletedOrder />
        </Route>

        <Route path="/">
          <HomePage galleryList={galleryList} />
        </Route>
      </Switch>
    </div>
  );
};
export default App;
