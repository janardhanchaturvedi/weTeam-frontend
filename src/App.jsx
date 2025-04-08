import './App.css';

import { Route, Routes } from 'react-router-dom';

import { Button } from './components/ui/button';
import { Auth } from './pages/Auth/Auth';

function App() {
  return (
    <Routes>
      <Route path="/auth" element={<Auth />} />
    </Routes>
  );
}

export default App;
