import axios from "axios"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import config from "../api/vercel"
import "../components/Layout.css"
import { setToken } from "../reducer/authSlice"

function Login() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { urlVercel } = config
  const [user, setUser] = useState({ email: "", password: "" })
  const [error, setError] = useState(null)

  const handleSubmit = async e => {
    e.preventDefault()

    try {
      const response = await axios({
        method: "POST",
        baseURL: urlVercel,
        url: "/tokens",
        headers: {
          "Content-Type": "application/json",
        },
        data: user,
      })

      if (response.status === 200) {
        const { token, error } = response.data
        if (token) {
          dispatch(setToken(token))
          navigate("/")
        } else {
          setError(error)
        }
      }
    } catch (error) {
      console.log("Error:", error)
    }
  }

  const handleUser = e => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  return (
    <div className="form-register">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email"></label>
          <input
            type="email"
            id="email"
            name="email"
            value={user.email}
            onChange={handleUser}
            required
          />
        </div>
        <div>
          <label htmlFor="password"></label>
          <input
            type="password"
            id="password"
            name="password"
            value={user.password}
            onChange={handleUser}
            autoComplete="on"
          />
        </div>
        <div className="log">
          <button>Login</button>
        </div>
      </form>
      {error && <div>{error}</div>}
    </div>
  )
}

export default Login
