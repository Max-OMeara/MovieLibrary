import './App.css'
import MovieCard from './components/MovieCard'
import Home from './pages/Home';

function App() {
  const movieNumber = 2;

  return (
    <>
      {movieNumber === 1 ? (<MovieCard movie = {{title: "Max's film", url: "https//:movie", release_date:"09/09/25"}}></MovieCard>) : 
      (<MovieCard movie = {{title: "Bella's film", url: "https//:movie", release_date:"09/09/25"}}></MovieCard>)}
      <Home></Home>

    </>
  )
}

export default App