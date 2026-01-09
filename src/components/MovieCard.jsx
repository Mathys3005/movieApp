import { Link } from "react-router";

const MovieCard = ({id, title, poster, rating}) => {
    return (
        <div className="w-72 bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            
            <div className="aspect-2/3 bg-gray-200 relative">
                <img
                    src={poster}
                    alt={title}
                    className="w-full h-full object-contain"
                />

                <span className="absolute top-3 right-3 bg-black/80 text-white text-sm font-semibold px-3 py-1 rounded-full">
                    ⭐ {rating.toFixed(1)}
                </span>
            </div>

            <div className="p-4 flex flex-col justify-between h-36">
                <h2 className="text-lg font-bold text-gray-800 line-clamp-2">
                    {title}
                </h2>

                <Link
                    to={`/movie/${id}`}
                    className="mt-4 inline-block text-center bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 rounded-lg transition"
                >
                    Voir les détails
                </Link>
            </div>
        </div>
    );
}

export default MovieCard;