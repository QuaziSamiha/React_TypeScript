type User4Props = {
  user4: {
    id: number;
    name: string;
    email: string;
  }[];
};

const User4 = ({ user4 }: User4Props) => {
  //   console.log(user3);

  return (
    <>
      <div className="bg-white p-6 my-4">
        <p>{user4.length} Users Available</p>
        {user4.map((user) => (
          // const {id, name, email} = user;
          <div className="bg-pink-300 p-4 m-3" key={user.id}>
            <p>{user.name}</p>
            <p>{user.email}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default User4;
