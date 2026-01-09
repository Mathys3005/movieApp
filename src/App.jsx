import MovieList from './pages/MovieList.jsx'
import MovieDetail from './pages/MovieDetail.jsx'
import { Routes, Route } from 'react-router'
import Wishlist from './pages/Wishlist.jsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<MovieList />} />
      <Route path="/movie/:id" element={<MovieDetail />} />
      <Route path="/wishlist" element={<Wishlist />} />
    </Routes>
  )
}

export default App
