  import React from 'react';
  import Home from './pages/Home';
  import About from './pages/About';
  import Contact from './pages/Contact';
  // import Gallery from './pages/Gallery';
  import { Outlet } from 'react-router-dom';

  import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
  import './App.css';

  const App: React.FC = () => {

    return (

                <>
                  <div id="home" className="section">
                    <Home />
                  </div>
                  <div id="about" className="section">
                    <About />
                  </div>
                  <div id="contact" className="section">
                    <Contact />
                  </div>
                  <Outlet/>
                </>
          
    );
  };

  export default App;
