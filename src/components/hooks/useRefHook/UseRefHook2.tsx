// storing mutable values
import { useEffect, useRef, useState } from "react";

const UseRefHook2 = () => {
	const renderCount = useRef(0);
	const [state, setState] = useState(0);

	useEffect(() => {
		renderCount.current += 1;
	});
	return (
		<div>
			<p>UseRefHook2</p>
			<p>Component has rendered {renderCount.current} times</p>
			<button onClick={() => setState(state + 1)}>Re-render</button>
		</div>
	);
};

export default UseRefHook2;
