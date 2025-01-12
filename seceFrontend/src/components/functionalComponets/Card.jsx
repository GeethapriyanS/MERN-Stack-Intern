const Card = ({ title, description }) => {
    return (
      <div style={{ border: "1px solid #ccc", padding: "15px", borderRadius: "5px", margin: "10px" }}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    );
  };
  
  export default Card;