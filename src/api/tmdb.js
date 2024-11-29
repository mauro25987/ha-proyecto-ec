import axios from "axios"

const config = {
  apiKeyTmdb: import.meta.env.VITE_API_KEY,
}

const apiKey = import.meta.env.VITE_API_KEY
const urlTmdb = "https://api.themoviedb.org/3"

const fetchMovies = async () => {
  try {
    const response = await axios({
      method: "GET",
      url: `${urlTmdb}/movie/popular`,
      params: { language: "en-US", page: "1" },
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
    })
    if (response.status === 200) {
      return { data: response.data.results, error: null }
    }
  } catch (error) {
    if (error.response) {
      return { error: "Error: algo salio mal", data: null }
    }
  }
}

const fetchMovie = async id => {
  try {
    const response = await axios({
      method: "GET",
      url: `${urlTmdb}/movie/${id}`,
      params: { language: "en-US" },
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
    })
    if (response.status === 200) {
      return { data: response.data, error: null }
    }
  } catch (error) {
    if (error.response) {
      return { error: "Error: algo salio mal", data: null }
    }
  }
}

export default config
export { fetchMovie, fetchMovies }
