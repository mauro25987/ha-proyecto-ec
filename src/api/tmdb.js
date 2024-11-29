import axios from "axios"

const config = {
  apiKeyTmdb: import.meta.env.VITE_API_KEY,
}

const apiKey = import.meta.env.VITE_API_KEY
const urlTmdb = "https://api.themoviedb.org/3/movie"

const fetchMovies = async () => {
  try {
    const [popular, top_rated, now_playing, upcoming] = await axios.all([
      axios({
        method: "GET",
        url: `${urlTmdb}/popular`,
        params: { language: "en-US", page: "1" },
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
      }),
      axios({
        method: "GET",
        url: `${urlTmdb}/top_rated`,
        params: { language: "en-US", page: "1" },
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
      }),
      axios({
        method: "GET",
        url: `${urlTmdb}/now_playing`,
        params: { language: "en-US", page: "1" },
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
      }),
      axios({
        method: "GET",
        url: `${urlTmdb}/upcoming`,
        params: { language: "en-US", page: "1" },
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
      }),
    ])
    if (
      popular.status === 200 &&
      top_rated.status === 200 &&
      now_playing.status === 200 &&
      upcoming.status === 200
    ) {
      return {
        data: {
          popular: popular.data.results,
          top_rated: top_rated.data.results,
          now_playing: now_playing.data.results,
          upcoming: upcoming.data.results,
        },
        error: null,
      }
    }
  } catch (error) {
    if (error.response) {
      return { error: "Error: Algo salio mal", data: null }
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
