type User3Props = { name: string; age: number };
const User3 = (props: User3Props) => {
  return (
    <>
      <div className="bg-white p-6 my-2">
        <h1>{props.name}</h1>
        <p>{props.age}</p>
      </div>
    </>
  );
};

export default User3;
