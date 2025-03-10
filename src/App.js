import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Particles from "./components/Particles";

function App() {
  return (
    <div className="App bg-light">
      <Header/>
      <div className="espacamento-conteudo"></div>
      {/* <div className="particles"></div> */}
      <Particles />
      <Home/>
      <About/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
