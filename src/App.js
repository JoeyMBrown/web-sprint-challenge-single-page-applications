import React from "react";
import { Switch, Route} from "react-router-dom";
import Header from "./Components/Header";
import HomePage from "./Pages/HomePage";
import CompletedOrder from "./Pages/CompletedOrder";
import PizzaForm from "./Pages/PizzaForm";
import { galleryList } from "./Data/dummydata";


const App = () => {
  return (
    <div>
      <Header />

      <Switch>
        <Route path="/pizza">
          <PizzaForm />
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
