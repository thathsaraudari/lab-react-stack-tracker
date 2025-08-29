import "./App.css";
import companiesData from './companies.json';
import technologiesData from './technologies.json';
import { useState } from 'react';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import CompanyPage from './pages/CompanyPage';
import TechnologyPage from './pages/TechnologyPage';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [companies, setCompanies] = useState(companiesData);
  const [technologies, setTechnologies] = useState(technologiesData);

  return (
    <div className="App">
      <h1>Stack Tracker</h1>
      <p>We have {companies.length} companies</p>
      <p>We have {technologies.length} technologies</p>

      <Navbar />
      
      <Routes>
        <Route path="/" element={<HomePage companies={companies} />} />
        <Route
          path="CompanyPage"
          element={<CompanyPage companies={companies} technologies={technologies} />}
        />
        <Route path="TechnologyPag" element={<TechnologyPage technologies={technologies} />} />
      </Routes>
    </div>
  );
}

export default App;
