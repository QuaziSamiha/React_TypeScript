// import React from "react";
// import {
// 	useTable,
// 	useSortBy,
// 	usePagination,
// 	ColumnDef,
// 	getCoreRowModel,
// 	useReactTable,
// } from "@tanstack/react-table";

// type Person = {
// 	firstName: string;
// 	lastName: string;
// 	age: number;
// };

// const data: Person[] = [
// 	{ firstName: "John", lastName: "Doe", age: 28 },
// 	{ firstName: "Jane", lastName: "Doe", age: 26 },
// 	{ firstName: "Sam", lastName: "Smith", age: 32 },
// ];

// const columns: ColumnDef<Person>[] = [
// 	{
// 		header: "First Name",
// 		accessorKey: "firstName",
// 	},
// 	{
// 		header: "Last Name",
// 		accessorKey: "lastName",
// 	},
// 	{
// 		header: "Age",
// 		accessorKey: "age",
// 	},
// ];

// const BasicTable: React.FC = () => {
// 	const {
// 		getTableProps,
// 		getTableBodyProps,
// 		headerGroups,
// 		page,
// 		prepareRow,
// 		canPreviousPage,
// 		canNextPage,
// 		pageOptions,
// 		pageCount,
// 		gotoPage,
// 		nextPage,
// 		previousPage,
// 		setPageSize,
// 		state: { pageIndex, pageSize },
// 	} = useReactTable<Person>(
// 		{
// 			data,
// 			columns,
// 			getCoreRowModel: getCoreRowModel(),
// 			initialState: { pageIndex: 0 },
// 		},
// 		useSortBy,
// 		usePagination
// 	);

// 	return (
// 		<>
// 			<table
// 				{...getTableProps()}
// 				className="min-w-full divide-y divide-gray-200"
// 			>
// 				<thead className="bg-gray-50">
// 					{headerGroups.map((headerGroup) => (
// 						<tr {...headerGroup.getHeaderGroupProps()}>
// 							{headerGroup.headers.map((column) => (
// 								<th
// 									{...column.getHeaderProps(column.getSortByToggleProps())}
// 									className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
// 								>
// 									{column.render("Header")}
// 									<span>
// 										{column.isSorted
// 											? column.isSortedDesc
// 												? " 🔽"
// 												: " 🔼"
// 											: ""}
// 									</span>
// 								</th>
// 							))}
// 						</tr>
// 					))}
// 				</thead>
// 				<tbody
// 					{...getTableBodyProps()}
// 					className="bg-white divide-y divide-gray-200"
// 				>
// 					{page.map((row) => {
// 						prepareRow(row);
// 						return (
// 							<tr {...row.getRowProps()}>
// 								{row.cells.map((cell) => (
// 									<td
// 										{...cell.getCellProps()}
// 										className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
// 									>
// 										{cell.render("Cell")}
// 									</td>
// 								))}
// 							</tr>
// 						);
// 					})}
// 				</tbody>
// 			</table>
// 			<div className="pagination">
// 				<button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
// 					{"<<"}
// 				</button>{" "}
// 				<button onClick={() => previousPage()} disabled={!canPreviousPage}>
// 					{"<"}
// 				</button>{" "}
// 				<button onClick={() => nextPage()} disabled={!canNextPage}>
// 					{">"}
// 				</button>{" "}
// 				<button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
// 					{">>"}
// 				</button>{" "}
// 				<span>
// 					Page{" "}
// 					<strong>
// 						{pageIndex + 1} of {pageOptions.length}
// 					</strong>{" "}
// 				</span>
// 				<select
// 					value={pageSize}
// 					onChange={(e) => {
// 						setPageSize(Number(e.target.value));
// 					}}
// 				>
// 					{[10, 20, 30, 40, 50].map((pageSize) => (
// 						<option key={pageSize} value={pageSize}>
// 							Show {pageSize}
// 						</option>
// 					))}
// 				</select>
// 			</div>
// 		</>
// 	);
// };

// export default BasicTable;
