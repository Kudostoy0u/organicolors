import React, { useEffect, useState } from 'react';

const Home: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
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
        <h1>Welcome to Organic  olors</h1>
        <p>Your source for beautiful framed artwork with a purpose.</p>
      </div>
    </div>
  );
};

export default Home;
