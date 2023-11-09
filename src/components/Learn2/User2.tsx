type User2Props = {
  name: string;
  age: number;
  isRegistered: boolean;
  language: string[];
};

const User2 = ({ name, age, isRegistered, language }: User2Props) => {
  return (
    <>
      <div className="bg-white p-6 my-4">
        <h1>{name}</h1>
        <p>{age}</p>
        {isRegistered ? <p>She is Registered</p> : <p>She is not Registered</p>}
        {language.map((lan, index) => (
          <div className="bg-blue-100 p-4 m-4" key={index}>
            {lan}
          </div>
        ))}
      </div>
    </>
  );
};

export default User2;
