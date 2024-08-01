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

const formats = ["size", "bold", "underline", "list", "bullet"];

const TextEditor3 = () => {
	const [value, setValue] = useState<string>("");
	const handleChange = (content: string) => {
		setValue(content);
	};

	console.log(value);
	return (
		<>
			<section className="container p-4 my-8">
				<h1>React Text Editor: </h1>
				<div className="flex gap-6">
					<div className="flex items-center justify-center">
						<div>
							<h1>Editor</h1>
							<div className="h-12">
								<ReactQuill
									// theme="snow"
									value={value}
									onChange={handleChange}
									modules={modules}
									formats={formats}
								/>
							</div>
						</div>
					</div>
					<div>
						<h1>Preview</h1>
						{value}
					</div>
				</div>
				{}
				<div
					dangerouslySetInnerHTML={{ __html: value }}
					className="my-48"
				></div>

				<ol>
					<li>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,{" "}
						<strong>
							sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
						</strong>
						<h1>
							. Ut enim ad minim veniam, quis nostrud exercitation ullamco
							laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
							dolor in reprehenderit in voluptate vel
						</h1>
						<u>it esse cillum dolore eu fugiat nulla pariatu</u>r. Excepteur
						sint occaecat cupidatat non proident,
						<span className="ql-size-huge">
							{" "}
							sunt in culpa qui officia deserunt mollit anim id est laborum.
						</span>
					</li>
				</ol>

				<ul>
					<li>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,{" "}
						<strong>
							sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
						</strong>
						<h1>
							. Ut enim ad minim veniam, quis nostrud exercitation ullamco
							laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
							dolor in reprehenderit in voluptate vel
						</h1>
						<u>it esse cillum dolore eu fugiat nulla pariatu</u>r. Excepteur
						sint occaecat cupidatat non proident,
						<span className="ql-size-huge">
							{" "}
							sunt in culpa qui officia deserunt mollit anim id est laborum.
						</span>
					</li>
				</ul>
			</section>
		</>
	);
};

export default TextEditor3;
