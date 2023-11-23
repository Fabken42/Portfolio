import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import './components/styles.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="espacamento-conteudo"></div>
      <Home/>
      <About/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
