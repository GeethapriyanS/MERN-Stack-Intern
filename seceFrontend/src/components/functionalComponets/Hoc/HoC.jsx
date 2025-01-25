import Button1 from "./Button1";
import Navbar from "../Navbar";
import trackingButtonComponent from "./trackingButtonComponent";
const HoC = ()=>{
const ButtonWithTracking = trackingButtonComponent(Button1);
  return(
    <div>
        <Navbar />
        <h2>This is HoC example</h2>
        <ButtonWithTracking name={"Login"} trackingInfo={{customerId:"15232323",password:"hello@sece"}} />
    </div>
  )
}
export default HoC;