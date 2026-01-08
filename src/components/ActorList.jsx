import { useEffect, useState } from 'react'

const ActorList = ({ movieId }) => {
    const [actors, setActors] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${import.meta.env.VITE_API_KEY}`)
            .then((response) => response.json())
            .then((data) => {
                setActors(data.cast)
                setLoading(false)
            })
    }, [movieId])

    if (loading) {
        return <div className="text-center mt-6">Chargement des acteurs…</div>
    }

    if (!actors.length) {
        return <p className="mt-6 text-center">Aucun acteur disponible.</p>
    }

    return (
        <div className="mt-8 max-w-6xl mx-auto">
            <h3 className="text-2xl font-bold mb-6">Acteurs principaux</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {actors.slice(0, 10).map((actor) => (
                    <div
                        key={actor.id}
                        className="bg-white rounded-xl shadow hover:shadow-xl transition overflow-hidden"
                    >
                        <div className="aspect-2/3 bg-gray-200">
                            <img
                                src={actor.profile_path ? `https://image.tmdb.org/t/p/w500${actor.profile_path}` : '/images/noImage.png'}
                                alt={actor.name}
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <div className="p-3">
                            <h4 className="text-lg font-semibold truncate">{actor.name}</h4>
                            <p className="text-gray-600 text-sm truncate">en tant que {actor.character}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ActorList
