import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AppProvider } from './context';
import { Auth0Provider } from '@auth0/auth0-react';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain="dev-b38y1b38l1hav0e5.us.auth0.com"
    clientId="Cbsu1gAOiCWePbqtLl6VIQahQIbNGBH2"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <AppProvider>
      <App />
    </AppProvider>
  </Auth0Provider>
);
