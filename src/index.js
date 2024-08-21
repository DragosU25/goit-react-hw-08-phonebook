import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from 'store/store';
import App from './App';
import './index.css';
import 'App.module.css';

// Obține elementul root
const rootElement = document.getElementById('root');

// Creează un root
const root = ReactDOM.createRoot(rootElement);

// Renderizează aplicația
root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
