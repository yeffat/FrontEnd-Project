export const Button = ({ onClick = () => {}, value = "", className = "" }) => {
  return (
    <button className={`${className} custom_btn`} onClick={onClick}>
      {value}
    </button>
  );
};
