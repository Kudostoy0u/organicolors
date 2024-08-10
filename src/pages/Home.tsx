import React, { useEffect, useState } from 'react';

const Home: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    // Determine if the user is on a mobile device by checking the window width
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < window.innerHeight); // You can adjust the breakpoint as needed
    };

    checkIsMobile(); // Check on initial load
    window.addEventListener('resize', checkIsMobile); // Recheck on window resize

    if (!isMobile) {      
      window.addEventListener('scroll', handleScroll);
    }

    return () => {
      window.removeEventListener('resize', checkIsMobile);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMobile]);

  const backgroundStyle = !isMobile
    ? {
        backgroundSize: `calc(100% + ${scrollY / 3}px) calc(100% + ${scrollY / 3}px)`,
        transition: 'background-size 0.1s',
      }
    : {
        // Static background style for mobile
        backgroundSize: '100% 100%',
      };
  return (
    <div className="home-section" style={backgroundStyle}>
      <div className="overlay"></div>
      <div className="content text-light">
        <h1>Welcome to Organicolors</h1>
        <p>Your source for beautiful framed artwork with a purpose.</p>
      </div>
    </div>
  );
};

export default Home;
