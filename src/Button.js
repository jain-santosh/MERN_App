// function Button() {
//   return (
//     <button>
//       Click Me!!.
//     </button>
//   );
// }

//Passing Event handler as a prop
// function Button() {
//   function handleClick() {
//     alert('You clicked me!!');
//   }

//   return (
//     <button onClick={handleClick}>
//       Click me!
//     </button>
//   );
// }


// function Button() {
//   return (
//     <button onClick={function handleClick() {
//       alert('You clicked me!');
//     }}> Click Me!! </button>
//   );
// }

function Button() {
  return (
    <button onClick={() => {
      alert('You clicked me!');
    }}> Click Me!! </button>
  );
}


export default Button;