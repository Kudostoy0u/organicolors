// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './index.css';
import Gallery from './pages/Gallery';
import Navbar from './components/Navbar';
import BottomBar from './components/BottomBar';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="/" element={<App />}/>
    <Route path="/gallery" element={<Gallery />} />
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Navbar/>
    <RouterProvider router={router} />
    <BottomBar/>
  </React.StrictMode>
);