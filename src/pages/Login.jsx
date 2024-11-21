import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "../components/Layout.css"

function Login() {
  const navigate = useNavigate()

  const [user, setUser] = useState({ email: "", password: "" })

  const handleSubmit = async e => {
    e.preventDefault()

    try {
      const response = await axios.post("https://ha-videoclub-api-g2.vercel.app/tokens", user, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      console.log(response)
      navigate("/")
    } catch (error) {
      console.log("error test", error)
    }
  }

  const handleUser = e => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  return (
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
      <div>
        <button>Login</button>
      </div>
    </form>
  )
}

export default Login
