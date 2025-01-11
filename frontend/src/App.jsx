import './styles/App.css'
import MovieCard from './components/MovieCard'
import Favorites from './pages/Favorites';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';

function App() {
  const movieNumber = 2;

  return (
    <>
    <div>
      <NavBar></NavBar>
      <main className='main-content'>
        <Routes>
          <Route path = "/" element = {<Home></Home>}></Route>
          <Route path = "/favorites" element= {<Favorites></Favorites>}></Route>
        </Routes>
      </main>
      </div>
    </>
  )
}

export default App