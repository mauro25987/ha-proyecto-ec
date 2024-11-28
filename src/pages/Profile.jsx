import axios from "axios"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import config from "../api/vercel"
import "./modal.css"

const Profile = () => {
  const { token, userId } = useSelector(state => state.auth)
  const { urlVercel } = config
  const [showModal, setShowModal] = useState(false)
  const [error, setError] = useState(null)
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [randomBanner, setRandomBanner] = useState("")
  const [password, setPassword] = useState("")

  useEffect(() => {
    const banners = [
      "https://images.wikidexcdn.net/mwuploads/wikidex/thumb/5/56/latest/20200307023245/Charmander.png/800px-Charmander.png",
      "https://i.pinimg.com/originals/90/58/3d/90583d6a4aaafaa6567539ec834f3696.png",
      "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/001.png",
    ]
    setRandomBanner(banners[Math.floor(Math.random() * banners.length)])
  }, [])

  const handleChange = e => {
    const { name, value } = e.target
    setUser({ ...user, [name]: value })
  }

  const handleSubmitModal = e => {
    e.preventDefault()
    // if(e.target.password !== "")
    //   setUser(...user, password: e.target.value)
    console.log("password", password)
    if (password !== "") setUser({ ...user, password })
    console.log(user)
    handleSaveProfile()
    setShowModal(!showModal)
  }

  const handleSaveProfile = async () => {
    try {
      const response = await axios({
        method: "PATCH",
        baseURL: urlVercel,
        url: `/users/${userId}`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        data: user,
      })

      if (response.status === 200) {
        console.log("usuario actualizado correctamente")
      }
    } catch (error) {
      setError("Error al actualizar el perfil. Intente nuevamente.", error)
    }
  }

  const fetchProfile = async () => {
    setLoading(true)
    try {
      const response = await axios({
        method: "GET",
        baseURL: urlVercel,
        url: `/users/${userId}`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      if (response.status === 200) {
        const { address, email, firstname, lastname, orders, phone } = response.data
        setUser({ address, email, firstname, lastname, orders, phone })
      }
    } catch (error) {
      if (error.response) {
        if (error.response.status === 401) {
          setError("Error: No autorizado, por favor inicie sesión")
        } else {
          setError(`Error: ${error.response.data.message || "Algo salió mal"}`)
        }
      } else {
        setError("Error: Problema de conexion, intente mas tarde")
      }
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchProfile()
  }, [])

  if (error) {
    return <div>{error}</div>
  }

  if (loading) {
    return <div>Cargando perfil...</div>
  }

  return (
    <div style={{ padding: "20px", textAlign: "center", marginTop: "60px" }}>
      <img src={randomBanner} className="banner" />
      <h1>Perfil </h1>
      <h2>
        Bienvenido {user.firstname} {user.lastname}{" "}
      </h2>
      <p>Email: {user.email}</p>
      <p>Telefono: {user.phone}</p>
      <p>Direccion: {user.address}</p>
      <button style={{ cursor: "pointer" }} onClick={() => setShowModal(!showModal)}>
        Editar Perfil
      </button>
      <hr />
      <h3>Compras realizadas</h3>

      {showModal && (
        <form onSubmit={handleSubmitModal}>
          <div className="modal-overlay">
            <div className="modal-content">
              <span className="cancel-button" onClick={() => setShowModal(!showModal)}>
                &times;
              </span>
              <h2>Editar perfil:</h2>
              <div className="form-group">
                <label htmlFor="firstname">Nombre:</label>
                <input
                  type="text"
                  id="firstname"
                  name="firstname"
                  value={user.firstname}
                  onChange={handleChange}
                  placeholder="Nombre"
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastname">Apellido:</label>
                <input
                  type="text"
                  id="lastname"
                  name="lastname"
                  value={user.lastname}
                  onChange={handleChange}
                  placeholder="Apellido"
                />
              </div>
              <div className="form-group">
                <label htmlFor="password"> Clave:</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder="Ingrese un nuevo password si desea"
                  autoComplete="on"
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone"> Teléfono:</label>
                <input
                  type="number"
                  id="phone"
                  name="phone"
                  value={user.phone}
                  onChange={handleChange}
                  placeholder="Numero"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  value={user.email}
                  onChange={handleChange}
                  placeholder="Email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="address">Direccion:</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={user.address}
                  onChange={handleChange}
                  placeholder="Dirección"
                />
              </div>
              <div className="modal-actions">
                <button className="save-button">Guardar</button>
              </div>
            </div>
          </div>
        </form>
      )}
    </div>
  )
}

export default Profile
