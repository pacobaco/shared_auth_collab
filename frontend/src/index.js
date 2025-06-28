import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
const logoRoutes = require('./routes/logoRoutes');
app.use('/api/logo', logoRoutes);
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
