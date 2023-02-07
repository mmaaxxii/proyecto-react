import React, { useState, useEffect } from "react";
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
import { Posts } from "./Posts";

const root = ReactDOM.createRoot(document.getElementById("root"));
const handleChange = (e) => {
  console.log(e.target.value);
};

const users = [
  {
    id: 1,
    name: "Maxi",
    image: "https://robohash.org/house2",
  },
  {
    id: 2,
    name: "Ceci",
    image: "https://robohash.org/user10?set=set",
  },
];

function Counter() {
  const [counter, setCounter] = useState(0);
  const [mensaje, setMensaje] = useState("");

  useEffect(() => {
    console.log("render");
  }, [counter]);

  return (
    <>
      <input onChange={(e) => setMensaje(e.target.value)} />
      <button
        onClick={() => {
          alert("El mensaje es " + mensaje);
        }}
      >
        {" "}
        Save
      </button>

      <br />
      <h1> Counter: {counter} </h1>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Sumar
      </button>

      <button
        onClick={() => {
          setCounter(counter - 1);
        }}
      >
        Restar
      </button>

      <button
        onClick={() => {
          setCounter(0);
        }}
      >
        Resetear
      </button>
    </>
  );
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
    />
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
    <Posts />*/}

    {users.map((user, index) => {
      return (
        <div key={index}>
          <h1>
            {" "}
            {index} + {user.name}
          </h1>
          <img src={user.image} />
        </div>
      );
    })}

    <Counter />
  </>
);
