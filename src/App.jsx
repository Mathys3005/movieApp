import MovieList from './pages/MovieList.jsx'
import MovieDetail from './pages/MovieDetail.jsx'
import { Routes, Route } from 'react-router'

function App() {
  return (
    <Routes>
      <Route path="/" element={<MovieList />} />
      <Route path="/movie/:id" element={<MovieDetail />} />
    </Routes>
  )
}

export default App
