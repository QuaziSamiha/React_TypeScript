// import {
// 	flexRender,
// 	getCoreRowModel,
// 	useReactTable,
// } from "@tanstack/react-table";
// import { useState } from "react";
// import DATA from "../data";

// const columns = [
// 	{
// 		accessorKey: "task",
// 		header: "Task",
// 		cell: (props) => <p>{props.getValue()}</p>,
// 	},
// 	{
// 		accessorKey: "status",
// 		header: "Status",
// 		cell: (props) => <p>{props.getValue()?.name}</p>,
// 	},
// 	{
// 		accessorKey: "due",
// 		header: "Due",
// 		cell: (props) => <p>{props.getValue()?.toLocaleTimeString()}</p>,
// 	},
// 	{
// 		accessorKey: "notes",
// 		header: "Notes",
// 		cell: (props) => <p>{props.getValue()}</p>,
// 	},
// ];
// const TaskTable = () => {
// 	const [data, setData] = useState(DATA);
// 	// console.log(data);

// 	const table = useReactTable({
// 		data,
// 		columns,
// 		getCoreRowModel: getCoreRowModel(),
// 	});

// 	console.log(table.getHeaderGroups());
// 	return (
// 		<div>
// 			<div className="table" w={table.getTotalSize()}>
// 				{table.getHeaderGroups().map((headerGroup) => (
// 					<div key={headerGroup.id}>
// 						{headerGroup.headers.map((header) => (
// 							<div key={header.id}>{header.column.columnDef.header}</div>
// 						))}
// 					</div>
// 				))}
// 				{table.getRowModel().rows.map((row) => (
// 					<div key={row.id}>
// 						{row.getVisibleCells().map((cell) => (
// 							<div key={cell.id}>
// 								{flexRender(cell.column.columnDef.cell, cell.getContext())}
// 							</div>
// 						))}
// 					</div>
// 				))}
// 			</div>
// 		</div>
// 	);
// };

// export default TaskTable;
