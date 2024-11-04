import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './Components/Sidebar';
import './App.css';

// Import or define the pages/components for each route
import Dashboard from './pages/Dashboard';
import Finance from './pages/Finance';
import HR from './pages/HR';
import Work from './pages/Work';

function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="app__content">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/finance" element={<Finance />} />
          <Route path="/hr" element={<HR />} />
          <Route path="/work" element={<Work />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
