import { type FormEvent, useState } from 'react'

interface Movie {
  id: number
  title: string
  genre: string
  rating: number
}

export function UseStateWithObjectPage() {
  const [movies, setMovies] = useState<Movie[]>([])
  const [title, setTitle] = useState('')
  const [genre, setGenre] = useState('action')
  const [rating, setRating] = useState(0)

  function handleAddNewMovie(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const newMovie: Movie = {
      id: movies.length + 1,
      title,
      genre,
      rating,
    }

    setMovies((state) => [...state, newMovie])
    setTitle('')
    setGenre('action')
    setRating(0)
  }

  return (
    <main>
      <h1>Use State With Object</h1>

      <form
        method="post"
        onSubmit={handleAddNewMovie}
        style={{ display: 'flex', gap: 8, marginBottom: 16 }}
      >
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <select name="genre" value={genre} onChange={(e) => setGenre(e.target.value)}>
          <option value="action">Action</option>
          <option value="comedy">Comedy</option>
          <option value="drama">Drama</option>
          <option value="fantasy">Fantasy</option>
          <option value="fiction">Fiction</option>
        </select>
        <input
          type="number"
          name="rating"
          placeholder="Rating"
          min={0}
          max={5}
          step={1}
          value={rating}
          onChange={(e) => setRating(Number(e.target.value))}
        />
        <button type="submit">Add movie</button>
      </form>

      <h2>Movie list</h2>
      <table style={{ borderCollapse: 'collapse', border: '1px solid black' }}>
        <thead>
          <tr>
            <th>Title</th>
            <th>Genre</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie) => (
            <tr key={movie.id}>
              <td>{movie.title}</td>
              <td>{movie.genre}</td>
              <td>{movie.rating}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  )
}
