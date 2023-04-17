import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import 'tachyons';
import 'react-ionicons';

const root = createRoot(document.getElementById('root'));

root.render(<App />)
