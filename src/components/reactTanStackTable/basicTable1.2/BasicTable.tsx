"use client";
import { ColumnDef, useReactTable } from "@tanstack/react-table";
import jsonData from "../../../MOCK_DATA.json";
import { columnDef } from "./columns";

interface IData {
	id: number;
	first_name: string;
	last_name: string;
	email: string;
	gender: string;
	dob: string;
}
const BasicTable1Two = () => {
	// console.log(jsonData);
	// console.log(columnDef);
	const tableInstance = useReactTable({
		columns: columnDef,
	});
	// console.log(tableInstance);
	console.log("test:", tableInstance.getHeaderGroups());
	return <div>BasicTable1Two</div>;
};

export default BasicTable1Two;
