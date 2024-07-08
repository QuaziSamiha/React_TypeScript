type Button1Props = {
  children: React.ReactNode;
};
const Button1 = (props: Button1Props) => {
  return <button>{props.children}</button>;
};
export default Button1;
