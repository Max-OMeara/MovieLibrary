import MovieCard from "../components/MovieCard"

function Home(){

    const movies = [
        {id: 1, title: "Max's film", url: "https//:movie", release_date:"09/09/25"},
        {id: 2, title: "Bellas's film", url: "https//:movie", release_date:"09/09/25"},
        {id: 3, title: "Frankies's film", url: "https//:movie", release_date:"09/09/25"},
        {id: 4, title: "Jack's film", url: "https//:movie", release_date:"09/09/25"},
        {id: 5, title: "Jax's film", url: "https//:movie", release_date:"09/09/25"},
        {id: 6, title: "Ximena's film", url: "https//:movie", release_date:"09/09/25"}
        ]

    return(
        <div className ="home">
            <div className = "movies-grid">
                {movies.map(movie => <MovieCard movie ={movie} key = {movie.id}></MovieCard>)}
            </div>
        </div>
    )
}

export default Home