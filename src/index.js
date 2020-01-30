import 'unfetch/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './contexts/UserContext';
import { LanguageProvider } from './contexts/LanguageContext';
import App from './components/App/App';
import './setup-icons';
import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <UserProvider>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </UserProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
