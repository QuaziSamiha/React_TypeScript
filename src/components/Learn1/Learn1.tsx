import User from "./User";
import User2 from "./User2";
import User3 from "./User3";
import User4 from "./User4";

// string, number , booolean , void, null

const Learn1 = () => {
  return (
    <>
      <section className="bg-pink-100 p-16">
        <h1 className="text-2xl font-semibold text-center py-6">
          Learning Part 1: Built in Props Types
        </h1>
        <div>
          <User name="samiha tasnim" />
          <User2 name="Kaniz Aysha" age={23} />
          <User3 name="Vutu Putu" age={2} />
          <User4 name="Vondul Mia" age={11} isRegistered={true} />
        </div>
      </section>
    </>
  );
};

export default Learn1;
