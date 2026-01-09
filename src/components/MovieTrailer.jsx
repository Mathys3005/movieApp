import { useEffect, useState } from "react"

const MovieTrailer = ({ movieId }) => {
    const [trailerKey, setTrailerKey] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (!movieId){
            setTrailerKey(null)
            setLoading(false)
            return
        }

        fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${import.meta.env.VITE_API_KEY}&language=fr-FR`)
            .then(res => res.json())
            .then(data => {
                const trailer = data.results.find(
                    value => value.type === "Trailer" && value.site === "YouTube"
                )
                setTrailerKey(trailer ? trailer.key : null)
                setLoading(false)
            })
            .catch(() => {
                setTrailerKey(null)
                setLoading(false)
            })
    }, [movieId])

    if (loading) return <p className="text-center mt-4">Chargement du trailer…</p>
    if (!trailerKey) return <p className="text-center mt-4 text-gray-500">Trailer non disponible</p>

    return (
        <div className="max-w-5xl mx-auto mt-6">
            <h2 className="text-2xl font-bold mb-2">Trailer</h2>
            <div className="relative" style={{ paddingTop: '56.25%' }}>
                <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${trailerKey}`}
                    title="Trailer"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            </div>
        </div>
    )
}

export default MovieTrailer
