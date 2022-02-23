import './App.scss';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Nav from './components/Nav';
import Projects from './components/Projects';
import Tech from './components/Tech';

function App() {
  return (
    <div className='App'>
      <Nav />
      <div className='App__content'>
        <Header />
        <About />
        <Tech />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
