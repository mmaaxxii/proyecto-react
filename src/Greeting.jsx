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
  return (
    <>
      <h1>La suma es : {add(10, 50)}</h1>
    </>
  );
}
