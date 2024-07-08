import {
	useReactTable,
	getCoreRowModel,
	flexRender,
} from "@tanstack/react-table";
import mData from "../../MOCK_DATA.json";
import { useMemo } from "react";
import { DateTime } from "luxon";

const BasicTable = () => {
	const data = useMemo(() => mData, []);

	/** @type import(@tanstack/react-table').ColumnDef<any> */
	const columns = [
		{
			header: "ID",
			accessorKey: "id",
			footer: "ID",
		},
		{
			header: "Name",
			columns: [
				{
					header: "First name",
					accessorKey: "first_name",
					footer: "First name",
				},
				{
					header: "Last name",
					accessorKey: "last_name",
					footer: "Last name",
				},
			],
		},
		//
		// {
		// 	header: "Name",
		// 	accessorFn: (row) => `${row.first_name} ${row.last_name}`,
		// },
		//
		// {
		// 	header: "First name",
		// 	accessorKey: "first_name",
		// 	footer: "First name",
		// },
		// {
		// 	header: "Last name",
		// 	accessorKey: "last_name",
		// 	footer: "Last name",
		// },
		{
			header: "Email",
			accessorKey: "email",
			footer: "Email",
		},
		{
			header: "Gender",
			accessorKey: "gender",
			footer: "Gender",
		},
		{
			header: "Date of birth",
			accessorKey: "dob",
			footer: "Date of birth",
			cell: (info) =>
				DateTime.fromISO(info.getValue()).toLocaleString(DateTime.Date_MED),
		},
	];

	const table = useReactTable({
		data,
		columns,
		getCoreRowModel: getCoreRowModel(),
	});

	return (
		<div>
			<table>
				<thead>
					{table.getHeaderGroups().map((headerGroup) => (
						<tr key={headerGroup.id}>
							{headerGroup.headers.map((header) => (
								<th key={header.id}>
									{flexRender(
										header.column.columnDef.header,
										header.getContext()
									)}
								</th>
							))}
						</tr>
					))}
				</thead>
				{/* <thead>
					<tr>
						<th>ID</th>
					</tr>
				</thead> */}
				<tbody>
					{table.getRowModel().rows.map((row) => (
						<tr key={row.id}>
							{row.getVisibleCells().map((cell) => (
								<td key={cell.id}>
									{flexRender(cell.column.columnDef.cell, cell.getContext())}
								</td>
							))}
						</tr>
					))}
					{/* <tr>
						<td>1</td>
					</tr> */}
				</tbody>
				<tfoot>
					{table.getFooterGroups().map((footerGroup) => (
						<tr key={footerGroup.id}>
							{footerGroup.headers.map((header) => (
								<th key={header.id}>
									{flexRender(
										header.column.columnDef.header,
										header.getContext()
									)}
								</th>
							))}
						</tr>
					))}
					{/* <tr>
						<td>ID</td>
					</tr> */}
				</tfoot>
			</table>
		</div>
	);
};

export default BasicTable;
