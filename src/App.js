 import './App.css';
import Hero from  './Hero';
 import  Navbar from './Navbar';
import Brand from './brand';
import Club from './Club';
import Closer from './Closer'
import Test from './test';
import Insider from './Insider';
import About from './About';
import Footer from './footer';
import CarouselSlider from './CarouselSlider';
 
function App() {
  return (
    <div className="App">
    <Navbar />
    <Hero />
    <Brand />
    <Club/>
    <CarouselSlider />
    
    <Closer />
    <Test />
    <Insider />
    <About />
     <Footer />
   
    </div>
  );
}

export default App;
