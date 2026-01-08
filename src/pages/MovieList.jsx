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
        return <div className="text-center text-xl mt-10">Chargement…</div>
    }

    return (
        <div className="bg-gray-100 min-h-screen px-6 py-8">
            
            <div className="flex flex-wrap justify-center gap-3 mb-6">
                {[
                    ["popular", "Populaire"],
                    ["top_rated", "Les mieux notés"],
                    ["upcoming", "Prochainement"],
                    ["now_playing", "En salle"],
                ].map(([value, label]) => (
                    <button
                        key={value}
                        onClick={() => {
                            setFilter(value)
                            setSearchString("")
                        }}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                            filter === value
                                ? "bg-blue-600 text-white"
                                : "bg-white text-gray-700 hover:bg-blue-100"
                        }`}
                    >
                        {label}
                    </button>
                ))}
            </div>

            <div className="max-w-xl mx-auto mb-8">
                <input
                    type="text"
                    placeholder="🔍 Rechercher un film..."
                    value={searchString}
                    onChange={(e) => setSearchString(e.target.value)}
                    className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
            </div>
            
            <div className="flex flex-wrap justify-center gap-6">
                {movies.map(movie => (
                    <MovieCard
                        key={movie.id}
                        id={movie.id}
                        title={movie.title}
                        poster={
                            movie.poster_path
                                ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : "/images/noImage.png"
                        }
                        rating={movie.vote_average}
                    />
                ))}
            </div>
        </div>
    )
}

export default MovieList
