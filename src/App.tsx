import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import RequestPage from './pages/RequestPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/request" replace />} />
        <Route path="/request" element={<RequestPage />} />
      </Routes>
    </Router>
  );
}

export default App;