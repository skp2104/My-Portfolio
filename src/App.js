import Navbar from './components/Layout/Navbar';
import './App.css';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Education from './pages/Education/Education';
import TechStack from './pages/TechStack/TechStack';
import Contact from './pages/Contact/Contact';
import ScrollToTop from 'react-scroll-to-top';
import { useState } from 'react';

function App() {
  const [childData, setChildData] = useState(false);

  const handleToggleChange = (newToggleValue) => {
    console.log('Toggle state in parent:', newToggleValue);
    // Handle the toggle state in the parent component
    setChildData(newToggleValue);
  };
  return (
    <>
      <div className={childData ? 'app-container-active' : 'app-container'}>
        <Navbar onToggleChange={handleToggleChange} />
        <div className='other-comp'>
          <Home />
          <About />
          <Education />
          <TechStack />
          <Contact />
        </div>
      </div>
      <ScrollToTop
        smooth
        color='#f29f67'
        style={{ backgroundColor: '#1e1e2c', borderRadius: '50%' }}
      />
    </>
  );
}

export default App;
