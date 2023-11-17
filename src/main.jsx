import React from 'react';
import ReactDOM from 'react-dom/client';
import { PrimeReactProvider } from "primereact/api";
import App from './App.jsx';
import './index.css';
import { tailwindConfig } from './theming.js';

ReactDOM.createRoot(document.getElementById('root')).render(
    <PrimeReactProvider value={{unstyled: true, pt: tailwindConfig}}>
      <App />
    </PrimeReactProvider>
);
