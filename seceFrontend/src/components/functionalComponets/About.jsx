import Navbar from "./Navbar";
const About = (Props) => {
    return(
        <div>
            <Navbar />
            <h3>Hello {Props.Hello} !!</h3>
        </div>
    )
}
export default About;