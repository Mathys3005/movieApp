import { Link, NavLink } from "react-router"


const Navbar = () => {
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
                </div>
            </div>
        </nav>
    )
}

export default Navbar
