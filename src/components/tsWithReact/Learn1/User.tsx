const User = (props: { name: string }) => {
  return (
    <>
      <div className="bg-white p-6 my-2">
        <h1>{props.name}</h1>
      </div>
    </>
  );
};

export default User;
