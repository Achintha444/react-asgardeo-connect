import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { AuthProvider } from '@asgardeo/auth-react';

const config = {
  signInRedirectURL: 'http://localhost:5173',
  signOutRedirectURL: 'http://localhost:5173',
  clientID: '<client_id>',
  baseUrl: 'https://api.asgardeo.io/t/<org_name>',
  scope: [ 'openid','profile' ]
};


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider config={ config }>
      <App />
    </AuthProvider>
  </React.StrictMode>,
)
