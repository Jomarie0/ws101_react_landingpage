import './App.css';
import Footer from './Components/Footer/Footer';
import Hero from './Components/Hero/Hero';
import History from './Components/History/History';
import Importance from './Components/Importance/Importance';
import KeyAspects from './Components/KeyAspects/KeyAspects';
import Nav from './Components/Nav/Nav'
import Whatsmore from './Components/Whatsmore/Whatsmore';
function App() {
  return (
    <div className="App">
      <Nav/> 
      <Hero/>
      <Whatsmore/>
      <KeyAspects/>
      <Importance/>
      <History/>
      <Footer/>
    </div>
  );
}

export default App;
