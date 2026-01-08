import { useEffect, useState } from 'react'

const ActorList = ({ movieId }) => {
    const [actors, setActors] = useState([])

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${import.meta.env.VITE_API_KEY}`)
        .then((response) => response.json())
        .then((data) => {
            setActors(data.cast)
        })
    }, [movieId])

    return (
        <div className="mt-6">
            <h3 className="text-2xl font-bold mb-4">Acteurs</h3>
            {actors.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {actors.slice(0, 10).map((actor) => (
                    <div key={actor.id} className="bg-white rounded shadow p-4">
                        <img
                            className="w-full h-48 object-cover rounded mb-2"
                            src={actor.profile_path ? `https://image.tmdb.org/t/p/w500${actor.profile_path}` : '/images/noImage.png'}
                            alt={actor.name}
                        />
                        <h4 className="text-lg font-semibold">{actor.name}</h4>
                        <p className="text-gray-600">en tant que {actor.character}</p>
                    </div>
                ))}
            </div>
            ) : (<p>Aucun acteur disponible.</p>
            )}
        </div>
    )
}

export default ActorList