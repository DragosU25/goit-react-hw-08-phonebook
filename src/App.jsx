// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Register from 'pages/Register';
import Login from 'pages/Login';
import Contacts from 'pages/Contacts';
import Navigation from 'components/Navigation/Navigation';
import PrivateRoute from 'components/PrivateRoute/PrivateRoute';
import PublicRoute from 'components/PublicRoute/PublicRoute';
import styles from 'App.module.css';

function App() {
  return (
    <Router>
      <div className={styles.app}>
        <Navigation />
        <Routes>
          <Route path="/" element={<h1>Welcome to Phonebook!</h1>} />
          <Route
            path="/register"
            element={<PublicRoute component={Register} />}
          />
          <Route path="/login" element={<PublicRoute component={Login} />} />
          <Route
            path="/contacts"
            element={<PrivateRoute component={Contacts} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
