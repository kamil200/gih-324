import Header from "./components/Header";
import "./App.css";
import CarouselNew from "./components/Carousel";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";

function App() {
  return (
    <div>
      <Header />
      <hr></hr>
      <Navbar />
      <hr style={{ margin: 0.002 }}></hr>
      <CarouselNew />
      <Cards />
    </div>
  );
}

export default App;
