// src/pages/NotFound.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',  // Full viewport height
      width: '100vw',   // Full viewport width
      backgroundColor: '#343a40', // Bootstrap's bg-dark color
      color: '#f8f9fa',           // Bootstrap's text-light color
      flexDirection: 'column',    // Center content vertically
    }}>
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link to="/" style={{ color: '#f8f9fa', textDecoration: 'underline' }}>
        Go back to the homepage
      </Link>
    </div>
  );
};

export default NotFound;
