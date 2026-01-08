import { useParams } from "react-router"
import { useEffect, useState } from "react"
import ActorList from "../components/ActorList.jsx"

const MovieDetail = () => {
    const { id } = useParams()
    const [movie, setMovie] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${import.meta.env.VITE_API_KEY}`)
            .then((response) => response.json())
            .then((data) => {
                setMovie(data)
                setLoading(false)
            })
    }, [id])

    if (loading) {
        return <div className="text-center text-xl mt-10">Chargement…</div>
    }

    if (!movie) {
        return <div className="text-center text-xl mt-10">Film introuvable</div>
    }

    return (
        <div className="bg-gray-100 min-h-screen p-6">
            <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="md:flex">
                    <img
                        className="w-full md:w-1/3 h-auto object-contain bg-gray-200"
                        src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : '/images/noImage.png'}
                        alt={movie.title}
                    />

                    <div className="p-6 md:w-2/3">
                        <h1 className="text-3xl font-bold mb-4">{movie.title}</h1>
                        <p className="text-gray-700 mb-4">{movie.overview || "Pas de description disponible."}</p>
                        
                        <div className="flex flex-wrap gap-4 mb-4">
                            <p className="text-gray-900 font-semibold">⭐ Note moyenne: {movie.vote_average}/10</p>
                            <p className="text-gray-900 font-semibold">📅 Date de sortie: {movie.release_date}</p>
                        </div>

                        {movie.genres && movie.genres.length > 0 && (
                            <div className="flex flex-wrap gap-2 mb-4">
                                {movie.genres.map((genre) => (
                                    <span
                                        key={genre.id}
                                        className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full"
                                    >
                                        {genre.name}
                                    </span>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <ActorList movieId={id} />
        </div>
    )
}

export default MovieDetail
