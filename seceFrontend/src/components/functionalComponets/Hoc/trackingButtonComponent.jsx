const trackingButtonComponent = (Component)=>{
   return(props)=>{
    console.log("Hoc Tracking comp");
    const handleClick = ()=>{
        console.log("Logged in Fetch the Tracking Info",props.trackingInfo);
    }
    return(
    <div onClick={handleClick}>
        CustomerID:
        <input type="text" />
        <br />
        Password:
        <input type="password" />
        <Component {...props}></Component>
    </div>
    )
   }
}
export default trackingButtonComponent;