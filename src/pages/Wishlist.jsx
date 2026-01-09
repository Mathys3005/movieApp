import { useContext } from "react"
import { WishlistContext } from "../providers/WishlistProvider.jsx"

const Wishlist = () => {
    const { wishlist, removeFromWishlist } = useContext(WishlistContext)

    if (wishlist.length === 0) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <p className="text-xl text-gray-600">
                    💔 Votre liste de souhaits est vide.
                </p>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl font-bold mb-8 text-center">
                    🎬 Ma Liste de Souhaits
                </h1>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {wishlist.map((movie) => (
                        <div
                            key={movie.id}
                            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform"
                        >
                            <div className="bg-gray-200 aspect-2/3">
                                <img
                                    className="w-full h-full object-cover"
                                    src={
                                    movie.poster_path
                                        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                                        : "/images/noImage.png"
                                    }
                                    alt={movie.title}
                                />
                            </div>



                            <div className="p-4">
                                <h2 className="text-xl font-semibold mb-2">
                                    {movie.title}
                                </h2>

                                <p className="text-gray-600 text-sm line-clamp-4">
                                    {movie.overview || "Pas de description disponible."}
                                </p>

                                <div className="mt-4 flex justify-between items-center">
                                    <span className="text-sm font-medium text-gray-800">
                                        ⭐ {movie.vote_average}/10
                                    </span>
                                    <span className="text-sm text-gray-500">
                                        📅 {movie.release_date}
                                    </span>
                                </div>
                            </div>
                            <div className="p-4 border-t">
                                <button
                                    className="w-full bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                                    onClick={() => removeFromWishlist(movie.id)}
                                >
                                    Retirer de la liste de souhaits
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Wishlist
