import type React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CharactersListPage from './pages/CharactersListPage'
import CharactersDetailsPage from './pages/CharactersDetailsPage'

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CharactersListPage />} />
        <Route path="/characters/:id" element={<CharactersDetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App
