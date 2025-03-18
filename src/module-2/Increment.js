//Count variable doesn't increase even after clicking the button.

function Increment() {
  let count = 0;

  function handleClick() {
    count = count + 1;
    console.log(count);
  }

  return (
    <>
      <button onClick={handleClick}>
        Increment
      </button>
      <h1>{count}</h1>
    </>
  )
}

export default Increment;