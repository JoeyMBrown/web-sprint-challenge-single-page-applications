import React, { useEffect, useState } from "react";
import { Switch, Route} from "react-router-dom";
import Header from "./Components/Header";
import HomePage from "./Pages/HomePage";
import CompletedOrder from "./Pages/CompletedOrder";
import PizzaForm from "./Pages/PizzaForm";
import { galleryList } from "./Data/dummydata";
import axios from "axios";
import * as yup from 'yup';
import schema from "./Validation/formSchema";


const App = () => {
  const defaultForm = {
    size: '',
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
    greenPepper: false,
    extraCheese: false,
    glutenFreeCrust: false,
    specialInstructions: '',
    size: '',
    name: ''
    //sauce: ''
  }
  const [formValues, setFormValues] = useState(defaultForm);
  const [errors, setErrors] = useState(defaultForm);
  const [disabled, setDisabled] = useState(true);

  const setFormErrors = (name, value) => { 
    yup
      .reach(schema, name) //Reach into schema, look at the key (name)
      .validate(value) // Look at the value associated with the key, does it pass the tests?
      .then(() => setErrors({ ...errors, [name]: "" })) //if it validates, reset errors to default
      .catch((err) => setErrors({ ...errors, [name]: err.errors[0] })); //if it fails to validate, update the key with the defined error in schema
  };


  function onChangeHandler(e) {
    const { name, value, checked, type} = e.target;
    const valueToChange = type === 'text' || type === 'select-one' || type === 'radio' ? value : checked;
    setFormErrors(name, valueToChange); //Call setFormErrors with the name of the event, and the value to use (use) or (checked);
    setFormValues({ ...formValues, [name]: valueToChange}); //Pass in a copy of the current form values, the updated key, and value.
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

  useEffect(() => {
    schema.isValid(formValues).then((valid) => setDisabled(!valid));
  }, [formValues]);

  return (
    <div>
      <Header />
      <div style={{color: 'red'}}>
        <div>{errors.name}</div>
        <div>{errors.size}</div>
      </div>

      <Switch>
        <Route path="/pizza">
          <PizzaForm formValues={formValues} onSubmit={onSubmit} onChangeHandler={onChangeHandler} disabled={disabled}/>
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
