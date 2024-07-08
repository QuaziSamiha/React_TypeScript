type DataFetch3Props = {
  status: "success" | "loading" | "error"; // using union to fixed status
};
const DataFetch3 = ({ status }: DataFetch3Props) => {
  if (status == "success") {
    return (
      <div className="bg-white p-6 my-4">
        <h1>Data Fetched Successfully</h1>
      </div>
    );
  } else if (status == "loading") {
    return (
      <div className="bg-white p-6 my-4">
        <h1>Data is loading....</h1>
      </div>
    );
  }
  return (
    <>
      <div className="bg-white p-6 my-4">
        <h1>Error. Data could not fetched</h1>
      </div>
    </>
  );
};

export default DataFetch3;
