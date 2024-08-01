import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const modules = {
	toolbar: [
		[{ header: "1" }, { header: "2" }, { font: [] }],
		[{ size: [] }],
		["bold", "italic", "underline", "strike", "blockquote"],
		[
			{ list: "ordered" },
			{ list: "bullet" },
			{ indent: "-1" },
			{ indent: "+1" },
		],
		["link", "image", "video"],
		["clean"],
	],
};

const formats = [
	"header",
	"font",
	"size",
	"bold",
	"italic",
	"underline",
	"strike",
	"blockquote",
	"list",
	"bullet",
	"indent",
	"link",
	"image",
	"video",
];

const TextEditor2 = () => {
	const [value, setValue] = useState<string>("");
	const handleChange = (content: string) => {
		setValue(content);
	};
	return (
		<>
			<section className="container p-4 my-8">
				<h1>React Text Editor: </h1>
				<div className="flex items-center justify-center">
					<div>
						<h1>Editor</h1>
						<div className="h-12">
							<ReactQuill
								theme="snow"
								value={value}
								onChange={handleChange}
								modules={modules}
								formats={formats}
							/>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default TextEditor2;
