import type React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import CharactersListPage from './pages/CharactersListPage'
import CharactersDetailsPage from './pages/CharactersDetailsPage'
import RickAndMortyLogo from './components/RickAndMortyLogo/RickAndMortyLogo'
import { useFocusOnLocationChange } from './hooks/useFocusOnLocationChange'

const AppContent = () => {
  useFocusOnLocationChange()

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Link to="/" className="home-link">
        <RickAndMortyLogo className="rick-and-morty-logo" />
      </Link>
      <Routes>
        <Route path="/" element={<CharactersListPage />} />
        <Route path="/character/:id" element={<CharactersDetailsPage />} />
      </Routes>
    </>
  )
}

const App: React.FC = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App
