import React from "react";
import ReactDOM from "react-dom/client";
import {
  Greeting1,
  Greeting2,
  Greeting3,
  Greeting50,
  Greeting6,
  Tarjeta,
} from "./Greeting";
import Product from "./Product";
import { Button } from "./Button";
import { TaskCard } from "./Task";
import { Saludar } from "./Saludar";

const root = ReactDOM.createRoot(document.getElementById("root"));
const handleChange = (e) => {
  console.log(e.target.value);
}


root.render(
  <>
    {/* {Greeting1()}
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
    />*/}
    <Button text="Click me" />
    <Button text="Pay Me" />
    <Button text={true} name="Juan" />
    <TaskCard ready={false} />
    <Saludar />
    <input
      id="hholola"
      onChange={function (e) {
        console.log(e.target.value);
      }}
    ></input>

    <input
      id="hholola"
      onChange={ (e) => {
        console.log(e.target.value);
      }}
    ></input>

    <input
      id="hholola"
      onChange={ handleChange }
    ></input>

    <input
      id="hholola"
      onDoubleClick={() => { console.log('Doble Click');}}
    ></input>
      
      <form onSubmit={(e) => { e.preventDefault() 
        alert('enviado') }}>
        <h1>Registro de usuario</h1>
        <button>Send</button>
      </form>

  </>
);
