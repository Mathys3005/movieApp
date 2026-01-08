import { useEffect, useState } from "react"
import MovieCard from "../components/MovieCard.jsx"

const MovieList = () =>{
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(true)
    const [filter, setFilter] = useState("popular")
    const [searchString, setSearchString] = useState("")

    useEffect(() => {
        let url = 'https://api.themoviedb.org/3/movie/' + filter + '?api_key=' + import.meta.env.VITE_API_KEY

        if (searchString !== "" && searchString.length > 0) {
            url = 'https://api.themoviedb.org/3/search/movie?api_key=' + import.meta.env.VITE_API_KEY + '&query=' + searchString
        }

        fetch(url)
        .then((response) => response.json())
        .then((data) => {
            setMovies(data.results)
            setLoading(false)
        })
    }, [filter, searchString])

    if (loading) {
        return <div>Loading...</div>
    }

    return (
        <div className="flex flex-wrap gap-4 justify-center p-4 bg-gray-100 min-h-screen">
            <div className="flex gap-4 mb-4">
                <button onClick={() => {setFilter("popular"); setSearchString("")}} className="px-4 py-2 bg-blue-500 text-white rounded">Populaire</button>
                <button onClick={() => {setFilter("top_rated"); setSearchString("")}} className="px-4 py-2 bg-blue-500 text-white rounded">Les mieux notés</button>
                <button onClick={() => {setFilter("upcoming"); setSearchString("")}} className="px-4 py-2 bg-blue-500 text-white rounded">Prochainement</button>
                <button onClick={() => {setFilter("now_playing"); setSearchString("")}} className="px-4 py-2 bg-blue-500 text-white rounded">En salle</button>
            </div>

            <div className="w-full mb-4">
                <input
                    type="text"
                    placeholder="Rechercher un film..."
                    value={searchString}
                    onChange={(e) => setSearchString(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded"
                />
            </div>

            {movies.map((movie) => (
                <MovieCard
                    key={movie.id}
                    id={movie.id}
                    title={movie.title}
                    poster={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : '/images/noImage.png'}
                    rating={movie.vote_average}
                />
            ))}
        </div>
    )
}

export default MovieList
