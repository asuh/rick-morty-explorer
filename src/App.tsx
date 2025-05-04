import type React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CharactersList from './pages/CharactersList'
import CharactersDetails from './pages/CharactersDetails'

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CharactersList />} />
        <Route path="/characters/:id" element={<CharactersDetails />} />
      </Routes>
    </Router>
  );
}

export default App
