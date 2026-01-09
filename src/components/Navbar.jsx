import { Link, NavLink } from "react-router"
import { useContext } from "react"
import { WishlistContext } from "../providers/WishlistProvider.jsx"


const Navbar = () => {
    const { wishlist } = useContext(WishlistContext)
    const wishlistCount = wishlist.length


    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                
                <Link to="/" className="text-2xl font-extrabold text-gray-800">
                    🎬 MovieApp
                </Link>

                <div className="flex gap-6">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `text-lg font-medium transition ${
                                isActive
                                    ? "text-blue-600 border-b-2 border-blue-600"
                                    : "text-gray-600 hover:text-blue-500"
                            }`
                        }
                    >
                        Accueil
                    </NavLink>
                    <NavLink
                        to="/wishlist"
                        className={({ isActive }) =>
                            `relative text-lg font-medium transition ${
                                isActive
                                    ? "text-blue-600 border-b-2 border-blue-600"
                                    : "text-gray-600 hover:text-blue-500"
                            }`
                        }
                    >
                        Liste de souhaits
                        {wishlistCount > 0 && (
                            <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                                {wishlistCount}
                            </span>
                        )}
                    </NavLink>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
