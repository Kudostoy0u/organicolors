  import React from 'react';
  import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
  import Navbar from './components/Navbar';
  import Home from './pages/Home';
  import About from './pages/About';
  import Contact from './pages/Contact';
  import Gallery from './pages/Gallery';
  import BottomBar from './components/BottomBar';
  import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
  import './App.css';

  const App: React.FC = () => {

    return (
      <Router>
        <div className="app">
          <Navbar />
          <Routes>
            {/* Main Page with Home, About, and Contact Sections */}
            <Route
              path="/"
              element={
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
                </>
              }
            />
            {/* Separate Gallery Page */}
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
          <BottomBar/>
        </div>
      </Router>
    );
  };

  export default App;
