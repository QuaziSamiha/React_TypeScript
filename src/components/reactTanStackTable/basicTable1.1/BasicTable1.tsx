/* eslint-disable no-mixed-spaces-and-tabs */
import { useMemo, useState } from "react";
import staticData from "../../../MOCK_DATA2.json";
import {
	ColumnDef,
	flexRender,
	getCoreRowModel,
	getFilteredRowModel,
	getPaginationRowModel,
	useReactTable,
} from "@tanstack/react-table";
import { DateTime } from "luxon";

type TUserData = {
	id: number;
	first_name: string;
	last_name: string;
	email: string;
	phone: string;
	gender: string;
	dob: string;
};

const BasicTableOne = () => {
	// =========== STATIC DATA FETCHING WITH USEMEMO ==========
	const data = useMemo(() => staticData, []);

	// =================== COLUMNS DEFINITION ================
	const tableColumns = useMemo<ColumnDef<TUserData>[]>(
		() => [
			{
				header: "ID",
				accessorKey: "id",
			},
			{
				header: "Name",
				columns: [
					{
						header: "First Name",
						accessorKey: "first_name",
					},
					{
						header: "Last Name",
						accessorKey: "last_name",
					},
				],
			},
			{
				header: "Contact Info",
				columns: [
					{
						header: "Email",
						accessorKey: "email",
					},
					{
						header: "Phone",
						accessorKey: "phone",
					},
				],
			},
			{
				header: "Gender",
				accessorKey: "gender",
			},
			{
				header: "Date of Birth",
				accessorKey: "dob",
				cell: (info) =>
					DateTime.fromISO(info.getValue() as string).toLocaleString(
						DateTime.DATE_MED
					),
			},
		],
		[]
	);

	// ==================== STATE INITIALIZED =======================
	const [filtering, setFiltering] = useState<string>("");

	// =================== TABLE FUNCTIONALITIES =========
	const dataTable = useReactTable<TUserData>({
		data,
		columns: tableColumns,
		getCoreRowModel: getCoreRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
		state: {
			globalFilter: filtering,
		},
		onGlobalFilterChange: setFiltering,
	});

	// console.log(dataTable);
	return (
		<section className="container p-8">
			<h1 className="text-center font-bold text-2xl text-purple-700">
				All Users
			</h1>

			<div className="my-3">
				<input
					type="text"
					value={filtering}
					onChange={(e) => setFiltering(e.target.value)}
					placeholder="Search for..."
					className="outline-none border border-blue-300 w-96 rounded px-4 py-2"
				/>
			</div>
			<table className="table-auto w-full border border-blue-500 my-4">
				{/* ====================== TABLE HEADER =========== */}
				<thead>
					{dataTable.getHeaderGroups().map((headerGroup) => (
						<tr key={headerGroup.id}>
							{headerGroup.headers.map((header) => (
								<th
									key={header.id}
									colSpan={header.colSpan}
									className="py-2 text-blue-800 border border-blue-500"
								>
									{header.isPlaceholder
										? null
										: flexRender(
												header.column.columnDef.header,
												header.getContext()
										  )}
								</th>
							))}
						</tr>
					))}
				</thead>
				{/* ====================== TABLE BODY =========== */}
				<tbody>
					{dataTable.getRowModel().rows.map((row) => (
						<tr key={row.id}>
							{row.getVisibleCells().map((cell) => (
								<td
									key={cell.id}
									className="text-center text-gray-500 py-2 border border-blue-500"
								>
									{flexRender(cell.column.columnDef.cell, cell.getContext())}
								</td>
							))}
						</tr>
					))}
				</tbody>
			</table>

			{/* ===================== BUTTONS ================== */}
			<div className="flex justify-center items-center">
				<div>
					<button
						onClick={() => dataTable.previousPage()}
						disabled={!dataTable.getCanPreviousPage()}
						className="px-3 py-1.5 mx-1 rounded border border-blue-400 disabled:cursor-not-allowed disabled:text-gray-400"
					>
						Prev
					</button>
					<button
						onClick={() => dataTable.setPageIndex(0)}
						className="px-3 py-1.5 mx-1 rounded border border-blue-400"
					>
						1
					</button>
					<button
						onClick={() => dataTable.setPageIndex(1)}
						className="px-3 py-1.5 mx-1 rounded border border-blue-400"
					>
						2
					</button>
					<button
						onClick={() => dataTable.setPageIndex(2)}
						className="px-3 py-1.5 mx-1 rounded border border-blue-400"
					>
						3
					</button>
					<span className="text-blue-400">. . . .</span>
					<button
						onClick={() => dataTable.setPageIndex(dataTable.getPageCount() - 2)}
						className="px-3 py-1.5 mx-1 rounded border border-blue-400"
					>
						{dataTable.getPageCount() - 1}
					</button>
					<button
						onClick={() => dataTable.setPageIndex(dataTable.getPageCount() - 1)}
						className="px-3 py-1.5 mx-1 rounded border border-blue-400"
					>
						{dataTable.getPageCount()}
					</button>
					<button
						onClick={() => dataTable.nextPage()}
						disabled={!dataTable.getCanNextPage()}
						className="px-3 py-1.5 mx-1 rounded border border-blue-400 disabled:cursor-not-allowed disabled:text-gray-400"
					>
						Next
					</button>
				</div>
			</div>
		</section>
	);
};

export default BasicTableOne;
