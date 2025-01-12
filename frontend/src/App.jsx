import './styles/App.css';
import MovieCard from './components/MovieCard';
import Favorites from './pages/Favorites';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import { Routes, Route, Navigate } from 'react-router-dom';
import { MovieProvider } from './contexts/MovieContext';
import Register from './pages/Register';
import LogIn from './pages/LogIn';
import React, { useState } from 'react';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <>
      <MovieProvider>
        {isLoggedIn && <NavBar />}
        <main className="main-content">
          <Routes>
            {/* Public routes */}
            {!isLoggedIn && (
              <>
                <Route path="/" element={<Register onLogin={handleLogin} />} />
                <Route path="/login" element={<LogIn onLogin={handleLogin} />} />
              </>
            )}

            {/* Protected routes */}
            {isLoggedIn && (
              <>
                <Route path="/" element={<Home />} />
                <Route path="/favorites" element={<Favorites />} />
              </>
            )}

            {/* Redirect unknown routes */}
            <Route path="*" element={<Navigate to={isLoggedIn ? "/" : "/login"} />} />
          </Routes>
        </main>
      </MovieProvider>
    </>
  );
}

export default App;
