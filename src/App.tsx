import type React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import CharactersListPage from './pages/CharactersListPage'
import CharactersDetailsPage from './pages/CharactersDetailsPage'
import RickAndMortyLogo from './components/RickAndMortyLogo/RickAndMortyLogo'

const App: React.FC = () => {
  return (
    <Router>
      <Link to="/" className="home-link">
        <RickAndMortyLogo className="rick-and-morty-logo" />
      </Link>
      <Routes>
        <Route path="/" element={<CharactersListPage />} />
        <Route path="/character/:id" element={<CharactersDetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App
