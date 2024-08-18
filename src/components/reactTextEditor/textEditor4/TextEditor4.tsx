"use client";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./style.css";

const modules = {
	toolbar: [
		[{ size: [] }],
		["bold", "underline"],
		[{ list: "ordered" }, { list: "bullet" }],
	],
};

const formats = ["size", "bold", "underline", "list"];

const TextEditor4 = () => {
	const [value, setValue] = useState<string>("");
	const handleChange = (content: string) => {
		setValue(content);
	};

	//   console.log(value);
	return (
		<>
			<div className="mt-16">
				<div className="mb-1">
					<label className="text-sm font-normal pb-2 pl-6 text-brandPrimary">
						Description
					</label>
				</div>
				<div className="w-96 mb-16">
					<ReactQuill
						theme="snow"
						value={value}
						onChange={handleChange}
						modules={modules}
						formats={formats}
						placeholder="Write here description..."
					/>
				</div>
			</div>
		</>
	);
};

export default TextEditor4;
