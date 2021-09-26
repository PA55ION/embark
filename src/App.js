import "./App.css";
import NavBar from "./components/navbar/Navbar";
import Hero from "./components/main-section/Hero"
import Features from './components/features/Features'
import { Footer }from "./components/footer/Footer"

function App() {
  return (
    <div>
      <NavBar />
      {/* <Hero /> */}
      <Features />
      <Footer />
    </div>
  );
}

export default App;
