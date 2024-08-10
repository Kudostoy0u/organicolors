import React, { useEffect, useState } from 'react';

const Home: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const backgroundStyle = {
    backgroundSize: `calc(100% + ${scrollY / 3}px) calc(100% + ${scrollY / 3}px)`,
    transition: 'background-size 0.1s'
  };

  return (
    <div className="home-section" style={backgroundStyle}>
      <div className="overlay"></div>
      <div className="content text-light">
        <h1>Welcome to OrganicColors</h1>
        <p>Your source for beautiful framed artwork with a purpose.</p>
      </div>
    </div>
  );
};

export default Home;
