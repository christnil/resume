import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Resume from './app';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Resume />
  </React.StrictMode>,
  document.getElementById('root')
);
