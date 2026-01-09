import { createContext, useState, useEffect } from "react";

export const WishlistContext = createContext(undefined)

const WishlistProvider = ({ children }) => {
    const [wishlist, setWishlist] = useState(() => {
        const storedWishlist = localStorage.getItem("wishlist");
        return storedWishlist ? JSON.parse(storedWishlist) : [];
    });

    useEffect(() => {
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
    }, [wishlist]);

    const addToWishlist = (movie) => {
        const existantMovie = wishlist.find((item) => item.id === movie.id);
        if (existantMovie) {
            return alert("Ce film est déjà dans votre liste de souhaits.");
        }

        setWishlist([...wishlist, movie]);
    }

    const removeFromWishlist = (movieId) => {
        const existantMovie = wishlist.find((item) => item.id === movieId);
        if (!existantMovie) {
            return;
        }

        setWishlist(wishlist.filter((movie) => movie.id !== movieId));
    }

    return (
        <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist }}>
            {children}
        </WishlistContext.Provider>
    );
};

export default WishlistProvider