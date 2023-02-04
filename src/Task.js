import "./task.css";

export function TaskCard({ready}) {
  return (
    <div className= "card">
      <h1 > Mi primera tareas</h1>
      <span className =  {ready ? 'bg-red' : 'bg-green' } > {ready ? 'Tarea Realizada' : 'Tarea no Realizada'} </span>
    </div>
  );

   
  };
//   const cardStyles = {
//     backgroundColor: "#202020",
//     color: "#fff",
//     padding: "20",
//      };
//  return <div style = {cardStyles}>
  //      <h1 style = {{fontWeight: "lighter"}}>Mi primer tarea</h1>
  //      <p>Tarea realizada </p>
  //  </div>

