type User4Props = {
  name: string;
  age: number;
  isRegistered: boolean;
};

const User4 = ({ name, age, isRegistered }: User4Props) => {
  return (
    <>
      <div className="bg-white p-6 my-2">
        <h1>{name}</h1>
        <p>{age}</p>
        {isRegistered ? <p>She is Registered</p> : <p>She is not Registered</p>}
      </div>
    </>
  );
};

export default User4;
