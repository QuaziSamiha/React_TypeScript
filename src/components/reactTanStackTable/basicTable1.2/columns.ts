import { DateTime } from "luxon";

export const columnDef = [
	{
		accessorKey: "id",
		header: "ID",
	},
	{
		accessorKey: "first_name",
		header: "First Name",
	},
	{
		accessorKey: "last_name",
		header: "Last Name",
	},
	{
		accessorKey: "email",
		header: "Email",
	},
	{
		accessorKey: "gender",
		header: "Gender",
	},
	{
		accessorKey: "dob",
		header: "Date of Birth",
		cell: (info) =>
			DateTime.fromISO(info.getValue() as string).toLocaleString(
				DateTime.DATE_MED
			),
	},
];
