// user defined types --> object, array, enum, union, any, custom type

import User1 from "./User1";
import User2 from "./User2";
import User3 from "./User3";
import User4 from "./User4";

// ---- for object type -------
const user3 = {
  name: "Black Vondul",
  age: 11,
  isRegistered: true,
  language: ["Hau Hau", "Cuu Cuu", "Auuuu"],
};

// ------ for array of object -------
const user4 = [
  {
    id: 1,
    name: "Yellow Vondul",
    email: "yellow@gmail.com",
  },
  {
    id: 2,
    name: "Pink Vondul",
    email: "pink@gmail.com",
  },
  {
    id: 3,
    name: "Green Vondul",
    email: "green@gmail.com",
  },
];

const Learn2 = () => {
  return (
    <>
      <section className="bg-yellow-100 p-16">
        <h1 className="text-2xl font-semibold text-center py-6">
          Learning Part 2 : User-Defined Props Types
        </h1>
        <div>
          {/* passing array */}
          <User1 language={["Bangla", "English"]} />
          <User2
            name="Red Vondul"
            age={145}
            isRegistered={false}
            language={["Java", "C++", "Python"]}
          />
          {/* passing object */}
          <User3 user3={user3} />
          {/* passing array of objects */}
          <User4 user4={user4} />
        </div>
      </section>
    </>
  );
};

export default Learn2;
