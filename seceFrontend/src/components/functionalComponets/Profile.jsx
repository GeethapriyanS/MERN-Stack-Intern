import Navbar from "./Navbar";

const Profile = ({ name, age, profession }) => {
    return (
      <div>
      <Navbar /> 
      <div style={{ border: "1px solid #333", padding: "15px", borderRadius: "10px", margin: "10px" }}>
        <h3>Profile</h3>
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Age:</strong> {age}</p>
        <p><strong>Profession:</strong> {profession}</p>
      </div>
      </div>
    );
  };
  export default Profile;