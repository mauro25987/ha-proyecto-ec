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
  const [dataForm, setDataForm] = useState({})
  const [randomBanner, setRandomBanner] = useState("")

  useEffect(() => {
    const banners = [
      "https://images.wikidexcdn.net/mwuploads/wikidex/thumb/5/56/latest/20200307023245/Charmander.png/800px-Charmander.png",
      "https://i.pinimg.com/originals/90/58/3d/90583d6a4aaafaa6567539ec834f3696.png",
      "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/001.png",
    ]
    setRandomBanner(banners[Math.floor(Math.random() * banners.length)])
  }, [])

  const handleShowModal = () => {
    setDataForm({ ...user })
    setShowModal(true)
  }
  const handleChange = e => {
    const { name, value } = e.target
    setDataForm(prev => ({ ...prev, [name]: value }))
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
        data: dataForm,
      })

      if (response.status === 200) {
        setUser(response.data)
        setShowModal(false)
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
        const { address, createdAt, email, firstname, lastname, orders, phone, updateAt } =
          response.data
        setUser({ address, createdAt, email, firstname, lastname, orders, phone, updateAt })
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

    if (error) {
      return <div>{error}</div>
    }

    if (loading) {
      return <div>Cargando perfil...</div>
    }
  }
  useEffect(() => {
    fetchProfile()
  }, [])
  return (
    <div style={{ padding: "20px", textAlign: "center", marginTop: "60px" }}>
      <img src={randomBanner} className="banner" />
      <h1>Perfil </h1>

      <h2>
        Bienvenido {user?.firstname} {user?.lastname}{" "}
      </h2>
      <p>Email: {user?.email}</p>
      <p>Telefono: {user?.phone}</p>
      <p></p>
      <button style={{ cursor: "pointer" }} onClick={handleShowModal}>
        Editar Perfil
      </button>
      <hr />

      <h3>Compras realizadas</h3>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <span className="cancel-button" onClick={() => setShowModal(false)}>
              &times;
            </span>
            <h2>Editar perfil:</h2>
            <div className="form-group">
              <input
                type="text"
                name="firstname"
                value={dataForm.firstname || ""}
                onChange={handleChange}
                placeholder="Nombre"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="lastname"
                value={dataForm.lastname || ""}
                onChange={handleChange}
                placeholder="Apellido"
              />{" "}
            </div>
            <div className="form-group">
              <input
                type="text"
                name="phone"
                value={dataForm.phone || ""}
                onChange={handleChange}
                placeholder="Numero"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="email"
                value={dataForm.email || ""}
                onChange={handleChange}
                placeholder="Email"
              />
            </div>
            <div className="modal-actions">
              <button className="save-button" onClick={handleSaveProfile}>
                Guardar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Profile
