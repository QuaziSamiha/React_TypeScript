import Learn1 from "./components/Learn1/Learn1";
import Learn2 from "./components/Learn2/Learn2";
import Learn3 from "./components/Learn3/Learn3";
import Learn4 from "./components/Learn4/Learn4";

function App() {
  return (
    <>
      <div>
        <h1 className="text-center text-3xl my-6">
          React TypeScript Learning Project
        </h1>
        <Learn1 />
        <Learn2 />
        <Learn3 />
        <Learn4 />
      </div>
    </>
  );
}

export default App;
