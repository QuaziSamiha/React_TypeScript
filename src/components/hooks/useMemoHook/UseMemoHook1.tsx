import { useMemo, useState } from "react";

const factorial = (n: number): number => {
	console.log("Computing factorial...");
	if (n <= 0) return 1;
	return n * factorial(n - 1);
};
const UseMemoHook1 = () => {
	const [number, setNumber] = useState<number>(5);
	const [otherNumber, setOtherNumber] = useState<number>(0);

	const memoizedFactorial = useMemo(() => factorial(number), [number]);

	return (
		<>
			<section className="p-4 container">
				<div className="my-2">
					<label className="block text-gray-700 text-sm font-bold mb-2">
						Number
					</label>
					<input
						type="number"
						value={number}
						onChange={(e) => setNumber(parseInt(e.target.value))}
						className="border rounded w-full py-2 px-3 text-gray-700"
					/>
				</div>

				<div className="my-2">
					<label className="block text-gray-700 text-sm font-bold mb-2">
						Other Number
					</label>
					<input
						type="number"
						value={otherNumber}
						onChange={(e) => setOtherNumber(parseInt(e.target.value))}
						className="border rounded w-full py-2 px-3 text-gray-700"
					/>
				</div>

				<div>
					<p className="text-xl text-red-500 my-3">
						Factorial of {number} is {memoizedFactorial}
					</p>
				</div>
			</section>
		</>
	);
};

export default UseMemoHook1;
