import { useState } from "react";

function IncrementState() {
	let [count, setCount] = useState(0);

	function handleIncrement() {
		setCount(count + 1);
	}
	
	function handleDecrement() {
		setCount(count - 1);
	}
	
	return (
	<>
		<div className="container d-flex justify-content-center align-items-center" style={{height: "100vh"}}>
			<button className="btn btn-danger btn mr-3" onClick={handleDecrement}>-</button>
			<h1 id="counter" className="mx-5">{count}</h1>
			<button className="btn btn-success btn ml-3" onClick={handleIncrement}>+</button>
		</div>
	</>
	)
}

export default IncrementState;