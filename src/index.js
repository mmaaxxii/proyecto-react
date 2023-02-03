import React from "react";
import ReactDOM from "react-dom/client";
import {Greeting1,Greeting2,Greeting3,Greeting50,Greeting6,Tarjeta} from "./Greeting";
import Product from "./Product";
import { Button } from "./Button";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    {Greeting1()}
    <Greeting2></Greeting2>
    <Greeting3 />
    <Product />
    <Greeting50 name="Maxi" edad={6} />
    <Greeting6 name="Ceci" />

    <Tarjeta
      name="Maxi"
      age={6}
      married={true}
      points={[15, 20, 50.2, 70]}
      address={{ street: "Balcarce 179", city: "Tucuman" }}
      greet={function(){alert("Hello word")}}
    />
    <Button text="Click me" />
    <Button text="Pay Me" />
    <Button />
  </>
);
