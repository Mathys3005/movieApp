import { useEffect, useState } from "react"
import useDebounce from "../tools/debounce.jsx"
import MovieCard from "../components/MovieCard.jsx"

const MovieList = () =>{
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(true)
    const [filter, setFilter] = useState("popular")
    const [searchString, setSearchString] = useState("")
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)

    const debouncedSearchString = useDebounce(searchString, 500)

    useEffect(() => {
        let url = `https://api.themoviedb.org/3/movie/${filter}?api_key=${import.meta.env.VITE_API_KEY}&page=${page}&language=fr-FR`

        if (debouncedSearchString.trim() !== "") {
            url = `https://api.themoviedb.org/3/search/movie?api_key=${import.meta.env.VITE_API_KEY}&query=${debouncedSearchString}&page=${page}&language=fr-FR`
        }

        fetch(url)
        .then((response) => response.json())
        .then((data) => {
            setMovies(data.results)
            setTotalPages(data.total_pages)
            setLoading(false)
        })
    }, [filter, debouncedSearchString, page])

    const filterChange = (newFilter) => {
        setFilter(newFilter)
        setSearchString("")
        setPage(1)
    }

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
                            filterChange(value)
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
                    onChange={(e) => {setSearchString(e.target.value); setPage(1)}}
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
                        rating={movie.vote_average ? movie.vote_average : 0}
                    />
                ))}
            </div>
            <div className="flex justify-center items-center mt-8 gap-4">
                <button
                    onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                    disabled={page === 1}
                    className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
                >
                    Précédent
                </button>
                <span className="text-gray-700">Page {page} sur {totalPages}</span>
                <button
                    onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
                    disabled={page === totalPages}
                    className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
                >
                    Suivant
                </button>
            </div>
        </div>
    )
}

export default MovieList
