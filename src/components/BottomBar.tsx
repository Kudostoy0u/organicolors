// src/components/BottomBar.tsx
import React from 'react';
import { Container } from 'react-bootstrap';

const BottomBar: React.FC = () => {
  return (
    <div className="bottom-bar">
      <Container>
        <p className="bottom-bar-text">
          &copy; 2024 by Kundan Baliga, made with <img src="/vite.svg" alt="Vite" className="vite-logo" />
        </p>
      </Container>
    </div>
  );
};

export default BottomBar;
