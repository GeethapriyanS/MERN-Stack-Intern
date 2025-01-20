import Home from "./components/functionalComponets/Home"
import Button  from "./components/functionalComponets/Button";
import Card from "./components/functionalComponets/Card";
import Footer from "./components/functionalComponets/Footer";
import Header from "./components/functionalComponets/Header";
import Profile from "./components/functionalComponets/Profile";
import ClassCompEG from "./components/classComponents/classCompEG";
import Gallery from "./components/classComponents/Gallery";

const App = () => {
  return (
    <div>
      <Home />
      <Header />
      <Card title="Introduction" description="This is a simple card component." />
      <Profile name="John Doe" age={28} profession="Developer" />
      <Button label="Click Me" onClick={() => alert("Button clicked!")} />
      <Footer />
      <ClassCompEG />
      <Gallery />
    </div>
  );
};

export default App;
