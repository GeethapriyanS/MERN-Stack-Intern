import { useState,useCallback } from "react";
import Navbar from "../Navbar";
import ListItem from "../ListItem";

const UseCallback = () => {
  var [num, setNum] = useState(0);
  var [dark, setDark] = useState(false);
  var styling = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };
  var getItems = useCallback(
    (inc) => {
      return [num + inc + 1, num + inc + 3, num + inc + 5];
    },
    [num]
  );
  return (
    <div>
      <Navbar />
      <div style={styling}>
        <button onClick={() => setDark((dark) => !dark)}>change theme</button>
        <h1>This is useCallback Example page</h1>
        <input
          type="number"
          value={num}
          onChange={(e) => {
            setNum(parseInt(e.target.value));
          }}/>
        <ListItem func={getItems}/>
      </div>
    </div>
  );
};
export default UseCallback;
