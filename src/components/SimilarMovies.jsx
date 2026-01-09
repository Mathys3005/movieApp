import { useEffect, useState } from 'react'

const SimilarMovies = ({ movieId }) => {
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=${import.meta.env.VITE_API_KEY}`)
            .then((response) => response.json())
            .then((data) => {
                setMovies([...data.results].sort((a, b) => b.vote_average - a.vote_average))
                setLoading(false)
            })
    }, [movieId])

    if (loading) {
        return <div className="text-center mt-6">Chargement des films similaires…</div>
    }

    if (!movies.length) {
        return <p className="mt-6 text-center">Aucun film similaire disponible.</p>
    }

    return (
        <div className="mt-8 max-w-6xl mx-auto">
            <h3 className="text-2xl font-bold mb-6">Films similaires les mieux notés</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {movies.slice(0, 10).map((movie) => (
                    <div
                        key={movie.id}
                        className="bg-white rounded-xl shadow hover:shadow-xl transition overflow-hidden"
                    >
                        <div className="aspect-2/3 bg-gray-200">
                            <img
                                src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : '/images/noImage.png'}
                                alt={movie.title}
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <div className="p-3">
                            <h4 className="text-lg font-semibold truncate">{movie.title}</h4>
                            <p className="text-gray-600 text-sm truncate">Note : {movie.vote_average}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SimilarMovies
