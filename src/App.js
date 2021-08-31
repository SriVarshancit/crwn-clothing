import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignUpandSignInPage from "./pages/sign-up-and-sign-in/sign-up-and-sign-in.component";
const HatsPage = () => (
  <div>
    <h1>HatsPage</h1>
  </div>
);

function App() {
  return (
    <div>
      <Header/>
   <Switch>
    <Route exact path="/" component={HomePage} />
      <Route path="/hats" component={HatsPage} />
      <Route path="/shop" component={ShopPage}/>
      <Route path ="/signin" component={SignUpandSignInPage}/>
   </Switch>
     
    </div>
  );
}

export default App;
