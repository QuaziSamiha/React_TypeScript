import DataFetch1 from "./DataFetch1";
import DataFetch2 from "./DataFetch2";
import DataFetch3 from "./DataFetch3";

const Learn3 = () => {
  return (
    <>
      <section className="bg-green-200 p-16">
        <h1 className="text-2xl font-semibold text-center py-6">
          Learning Part 3: Typing children Props
        </h1>
        <div>
          <DataFetch1 status="success" />
          <DataFetch2 status="loading" />
          {/* using union */}
          {/* this will show an error */}
          {/* <DataFetch3 status="demo"/> */}
          <DataFetch3 status="error" />
        </div>
      </section>
    </>
  );
};

export default Learn3;
