import { Link } from "react-router";

const MovieCard = ({id, title, poster, rating}) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg p-4 bg-white">
            <img className="w-full h-64 object-cover" src={poster} alt={title} />
            <div className="mt-4">
                <h2 className="text-xl font-bold mb-2">{title}</h2>
                <p className="text-gray-700">Rating: {rating}/10</p>
            </div>
            <div className="mt-4">
                <Link to={`/movie/${id}`} className="px-4 py-2 bg-green-500 text-white rounded">Voir les détails</Link>
            </div>
        </div>
    );
}

export default MovieCard;