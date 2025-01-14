import AboutUs from "./components/AboutUs";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Partners from "./components/Partners";

const App = () => {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Partners/>
      <AboutUs/>
    </div>
  );
}

export default App;

