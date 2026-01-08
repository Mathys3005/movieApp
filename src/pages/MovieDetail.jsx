import { data, useParams } from "react-router"
import { useEffect, useState } from "react"
import ActorList from "../components/ActorList.jsx"

const MovieDetail = () => {
    const { id } = useParams()
    const [movie, setMovie] = useState(null)

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${import.meta.env.VITE_API_KEY}`)
        .then((response) => response.json())
        .then((data) => {
            setMovie(data)
        })
    }, [])

    if (!movie) {
        return <div>Loading...</div>
    }
    return (
        <div className="p-4 bg-gray-100 min-h-screen">
            <div className="max-w-4xl mx-auto bg-white rounded shadow-lg p-6">
                <h1 className="text-3xl font-bold mb-4">{movie.title}</h1>
                <img
                    className="w-full h-auto mb-4 rounded"
                    src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : '/images/noImage.png'}
                    alt={movie.title}
                />
                <p className="text-gray-700 mb-4">{movie.overview}</p>
                <p className="text-gray-900 font-semibold">Note moyenne: {movie.vote_average}/10</p>
                <p className="text-gray-900 font-semibold">Date de sortie: {movie.release_date}</p>
            </div>
            <ActorList movieId={id} />
        </div>
    )
}

export default MovieDetail