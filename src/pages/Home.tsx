import React, { useEffect, useState } from 'react';

const Home: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(document.documentElement.scrollTop || document.body.scrollTop || 0);
    };

    const intervalId = setInterval(handleScroll, 10); // Check every 10 milliseconds

    return () => {
      clearInterval(intervalId); // Clean up the interval on component unmount
    };
  }, []);

  const backgroundStyle = {
    backgroundSize: `calc(100% + ${scrollY / 3}px) calc(100% + ${scrollY / 3}px)`,
    transition: 'background-size 0.1s',
  };    
  return (
    <div className="home-section" style={backgroundStyle}>
      <div className="overlay"></div>
      <div className="content text-light">
        <h1>Welcome to Organic  olors</h1>
        <p>Your source for beautiful framed artwork with a purpose.</p>
      </div>
    </div>
  );
};

export default Home;
