import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginInterface from './components/LoginInterface';
import Dashboard from './components/Dashboard'; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginInterface />} />
        <Route path="/Dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

