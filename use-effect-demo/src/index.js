import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { MyProvider } from './USE_EFFECT/MyProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <MyProvider>
    <App />
  </MyProvider>
);

