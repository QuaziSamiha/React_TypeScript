import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const TextEditor1 = () => {
	const [value, setValue] = useState<string>("");
	const handleChange = (content: string) => {
		setValue(content);
	};
	return (
		<>
			<section className="container p-4">
				<h1>React Text Editor: </h1>
				<div className="flex items-center justify-center">
					<div>
						<h1>Editor</h1>
						<div className="h-12">
							<ReactQuill theme="snow" value={value} onChange={handleChange} />
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default TextEditor1;
