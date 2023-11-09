// type DemoProp1 = {
//     status: string;
// }
// type DemoProp2 = {
//     status: number
// }
// type DataFetch4Props = {
//     status:DemoProp1 | DemoProp2  };
//   const DataFetch4 = ({ status }: DataFetch4Props) => {
//     if (status == "success") {
//       return (
//         <div className="bg-white p-6 my-4">
//           <h1>Data Fetched Successfully</h1>
//         </div>
//       );
//     } else if (status == "loading") {
//       return (
//         <div className="bg-white p-6 my-4">
//           <h1>Data is loading....</h1>
//         </div>
//       );
//     }
//     return (
//       <>
//         <div className="bg-white p-6 my-4">
//           <h1>Error. Data could not fetched</h1>
//         </div>
//       </>
//     );
//   };

//   export default DataFetch4;
