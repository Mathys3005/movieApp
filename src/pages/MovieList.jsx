import { useEffect, useState } from "react"

const MovieList = () =>{
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState([])
    
    useEffect(() => {
        fetch()
        .then((response) => response.json())
        .then((data) => {
            setPokemons(data.data)
            setLoading(false)
        })
    }, [])
}