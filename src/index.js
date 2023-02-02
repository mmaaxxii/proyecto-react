import React from "react";
import ReactDOM from "react-dom/client";
import { Greeting1, Greeting2, Greeting3 } from "./Greeting";
import Product from "./Product"



const root = ReactDOM.createRoot(document.getElementById("root"));



root.render(
  <>
    {Greeting1()}
    <Greeting2></Greeting2>
    <Greeting3/>
    <Product/>
  </>
); 