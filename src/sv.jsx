import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Resume from './app';
import { loadResume } from './content';

createRoot(document.getElementById('root')).render(<React.StrictMode><Resume language="sv" data={loadResume('sv')} /></React.StrictMode>);
