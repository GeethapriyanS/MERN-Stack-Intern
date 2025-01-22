import Navbar from "./Navbar";
const Card = ({ title, description }) => {
    return (
      <div>
      <Navbar />
      <div style={{ border: "1px solid #ccc", padding: "15px", borderRadius: "5px", margin: "10px" }}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      </div>
    );
  };
  
  export default Card;