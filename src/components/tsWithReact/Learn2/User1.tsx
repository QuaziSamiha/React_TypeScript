type User1Props = {
  language: string[];
};
const User1 = ({ language }: User1Props) => {
  return (
    <>
      <div className="bg-white p-6 my-4">
        {language.map((lan, index) => (
          <div className="bg-blue-100 p-4 m-4" key={index}>
            {lan}
          </div>
        ))}
      </div>
    </>
  );
};

export default User1;
