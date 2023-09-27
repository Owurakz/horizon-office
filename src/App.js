import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar";
import Carousel from "./components/carousel";
import Body from "./components/body";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Carousel />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
