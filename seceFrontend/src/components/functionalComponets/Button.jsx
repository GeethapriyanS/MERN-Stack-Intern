const Button = ({ label, onClick }) => {
    return (
      <button onClick={onClick} style={{ padding: "10px 20px", margin: "5px" }}>
        {label}
      </button>
    );
  };
  export default Button;