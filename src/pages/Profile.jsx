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
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1 style={{ marginTop: "60px" }}>Perfil</h1>
      <h2>
        Nombre: {user?.firstname} {user?.lastname}
      </h2>
      <p>Direccion de correo: {user?.email}</p>
      <p>Telefono: {user?.phone}</p>
      <p></p>
      <button style={{ cursor: "pointer" }} onClick={handleShowModal}>
        Editar Perfil
      </button>

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
