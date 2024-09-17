import "./App.css";
import Companies from "./components/Companies";
import Ellipse from "./components/Ellipse";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Plan from "./components/Plan";
import Ratingssection from "./components/Ratingssection";
import Form from "./components/Form";

function App() {
  return <div>
    <Navbar/>
    <Ellipse/>
    <HeroSection/>
    <Companies/>
    <Ratingssection/>
    <Plan/>
    <Form/>
  </div>;
}

export default App;
