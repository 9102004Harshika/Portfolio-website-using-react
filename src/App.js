import logo from './logo.svg';
import './App.css';
import  Main  from './components/Main';
import Banner from './components/Banner'
import  Skills  from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
   <Main/>
   <Banner/>
   <Skills/>
   <Projects/>
   <Contact/>
   <Footer/>
   </div>
  );
}

export default App;
