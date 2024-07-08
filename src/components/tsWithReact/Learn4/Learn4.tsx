import Button1 from "./Button1";
import Post from "./Post";

const Learn4 = () => {
  return (
    <>
      <section className="bg-red-200 p-16">
        <h1 className="text-2xl font-semibold text-center py-6">
          Learning Part 4: Children Props
        </h1>
        <div>
          <div className="bg-white p-6 my-4">
            <Button1>click me button 1</Button1>
          </div>
          <div className="bg-white p-6 my-4">
            <Post />
          </div>
        </div>
      </section>
    </>
  );
};

export default Learn4;
