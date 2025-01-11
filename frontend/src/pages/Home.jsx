import MovieCard from "../components/MovieCard"
import { useState } from "react"
import '../styles/Home.css'

function Home(){
    const [searchQuery, setSearchQuery] = useState("");

    const movies = [
        {id: 1, title: "Max", url: "https//:movie", release_date:"09/09/25"},
        {id: 2, title: "Bellas", url: "https//:movie", release_date:"09/09/25"},
        {id: 3, title: "Frankies", url: "https//:movie", release_date:"09/09/25"},
        {id: 4, title: "Jacks", url: "https//:movie", release_date:"09/09/25"},
        {id: 5, title: "Jaxs", url: "https//:movie", release_date:"09/09/25"},
        {id: 6, title: "Ximenas", url: "https//:movie", release_date:"09/09/25"}
        ]
    
    const handleSearch = (e) => {
        e.preventDefault()
        alert(searchQuery)
    }

    return(
        <div className ="home">
            <form onSubmit={handleSearch} className ="search-form">
                <input type="text" 
                placeholder="Search for movies" 
                className="search-input" 
                value = {searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}/>
                <button type = "submit" className="search-button">Search</button>
            </form>
            <div className = "movies-grid">
                {movies.map((movie) =>  
                (<MovieCard movie = {movie} key = {movie.id}/>)
                )}
            </div>
        </div>
    )
}

export default Home