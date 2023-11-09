const User2 = (props: { name: string; age: number }) => {
  return (
    <>
      <div className="bg-white p-6 my-2">
        <h1>{props.name}</h1>
        <p>{props.age}</p>
      </div>
    </>
  );
};

export default User2;
