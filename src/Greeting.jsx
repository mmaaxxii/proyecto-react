export function Greeting1() {
  const name = "hola";
  const married = true;

  if (married) {
    return (
      <did>
        <h1>Este es un componente 😂 {name}</h1>
        <p>Lorem 123</p>
      </did>
    );
  } else {
    return (
      <h1>{married === false ? "no estoy casado 😂" : "estoy casado 😂"}</h1>
    );
  }
}

export function Greeting2() {
  const user = {
    firstName: "ryan",
    lastName: "Ray",
  };

  return (
    <>
      <h1>{user.firstName}</h1>
      <h1>{user.lastName}</h1>
    </>
  );
}
export function Greeting3() {
  function add(x, y) {
    return x + y;
  }
  return <h1>La suma es : {add(10, 50)}</h1>;
}
export function Greeting50(props) {
  return (
    <>
      <h1> Hola {props.name} </h1>
      <h1> mi edad es {props.edad} </h1>
    </>
  );
}
export function Greeting6({ name, edad = 0 }) {
  return (
    <>
      <h1>Hola {name}</h1>
      <h1> mi edad es {edad} </h1>
    </>
  );
}
export function Tarjeta(props) {
  return (
    <>
      <h1>
        Name : {props.name} - {props.married === true ? "Married" : "Single"}
      </h1>
      <ul>
        <h2>Address</h2>
        <li> Street: {props.address.street}</li>
        <li> City: </li>
      </ul>
      <p>Age : {props.age}</p>
      <p>Point : {props.points}</p>
    </>
  );
}
