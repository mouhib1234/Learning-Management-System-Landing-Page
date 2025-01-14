import AboutUs from "./components/AboutUs";
import GetStartedNow from "./components/GetStarted";
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
      <GetStartedNow/>
    </div>
  );
}

export default App;

