import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './Homepage';
import AboutUsPage from './AboutUsPage';
import Translator from './Translator';
import NotFoundPage from './NotFoundPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Homepage />} />
    <Route path="/aboutUs" element={<AboutUsPage />} />
    <Route path="/translator" element={<Translator />} />
    <Route path="*" element={<NotFoundPage />} />
  </Routes>
</BrowserRouter>
);
