import Home from "./components/functionalComponets/Home";
import Button  from "./components/functionalComponets/Button";
import Card from "./components/functionalComponets/Card";
import Footer from "./components/functionalComponets/Footer";
import Header from "./components/functionalComponets/Header";
import Profile from "./components/functionalComponets/Profile";
import ClassCompEG from "./components/classComponents/classCompEG";
import Gallery from "./components/classComponents/Gallery";
import About from "./components/functionalComponets/About";
import Contact from "./components/functionalComponets/contact";
import Navbar from "./components/functionalComponets/Navbar";
import {BrowserRouter ,Routes ,Route} from 'react-router-dom';
import SignUp from "./components/functionalComponets/SignUp";
import UseState from "./components/functionalComponets/Hooks/UseState";
import UseEffect from "./components/functionalComponets/Hooks/UseEffect";
import UseEffectAPI from "./components/functionalComponets/Hooks/UseEffectAPI";
import UseEffectAPIimage from "./components/functionalComponets/Hooks/UseEffectAPIimage";

const App = () => {
  return (
    <>
     <BrowserRouter>
      <Routes>
       <Route path="/" element={<SignUp />}></Route>
       <Route path="/home" element={<Home />}></Route>
       <Route path="/card" element={<Card title="Introduction" description="This is a simple card component." />}></Route>
       <Route path="/use-state" element={<UseState />}></Route> 
       <Route path="/use-effect" element={<UseEffect />}></Route> 
       <Route path="/use-effect-api" element={<UseEffectAPI />}></Route> 
       <Route path="/use-effect-api-img" element={<UseEffectAPIimage />}></Route> 
       <Route path="/about" element={<About Hello="Geethapriyan" />}></Route> {/* props Example */}
       <Route path="/profile" element={<Profile name="Geethapriyan S" age={20} profession="Developer" />}></Route>
       <Route path="/contact" element={<Contact />}></Route>   {/* state Example */}
      </Routes>
      </BrowserRouter>
      <Footer />
    {/* <Button label="Click Me" onClick={() => alert("Button clicked!")} /> */}
    </>
  );
};

export default App;
