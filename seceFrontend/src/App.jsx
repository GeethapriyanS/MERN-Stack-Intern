import Home from "./components/functionalComponets/Home"
import Button  from "./components/functionalComponets/Button";
import Card from "./components/functionalComponets/Card";
import Footer from "./components/functionalComponets/Footer";
import Header from "./components/functionalComponets/Header";
import Profile from "./components/functionalComponets/Profile";

const App = () => {
  return (
    <div>
      <Header />
      <Card title="Introduction" description="This is a simple card component." />
      <Profile name="John Doe" age={28} profession="Developer" />
      <Button label="Click Me" onClick={() => alert("Button clicked!")} />
      <Footer />
    </div>
  );
};

export default App;
