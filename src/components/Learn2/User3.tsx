type User3Props = {
  user3: {
    name: string;
    age: number;
    isRegistered: boolean;
    language: string[];
  };
};

const User3 = ({ user3 }: User3Props) => {
  //   console.log(user3);
  return (
    <>
      <div className="bg-white p-6 my-4">
        <h1>{user3.name}</h1>
        <p>{user3.age}</p>
        {user3.isRegistered ? (
          <p>She is Registered</p>
        ) : (
          <p>She is not Registered</p>
        )}
        {user3.language.map((lan, index) => (
          <div className="bg-blue-100 p-4 m-4" key={index}>
            {lan}
          </div>
        ))}
      </div>
    </>
  );
};

export default User3;
