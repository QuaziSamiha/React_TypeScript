// CREATE A REF TO A DOM ELEMENT

import { useEffect, useRef } from "react";

const UseRefHook1 = () => {
	const inputRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		(inputRef.current as HTMLInputElement).focus();
	}, []);
	return (
		<div>
			<h1>UseRefHook1</h1>

			<input
				type="text"
				ref={inputRef}
				className=" m-3 px-3 py-1 border border-blue-500 rounded outline-none"
			/>
		</div>
	);
};

export default UseRefHook1;
