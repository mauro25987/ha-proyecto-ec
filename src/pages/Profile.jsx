import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { fetchProfile, updateProfile } from "../api/vercel"
import ModalProfile from "../components/ModalProfile"
import randomBanners from "../utils/randomBanner"
import "./modal.css"

const Profile = () => {
  const { token, userId } = useSelector(state => state.auth)
  const [showModal, setShowModal] = useState(false)
  const [error, setError] = useState(null)
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [password, setPassword] = useState("")

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
    handleUpdateProfile()
    setShowModal(!showModal)
  }

  const handleUpdateProfile = async () => {
    setLoading(true)
    const { data, error } = await updateProfile(token, userId, user)
    if (data) {
      console.log(data)
    }
    if (error) {
      setError(error)
    }
    setLoading(false)
  }

  const handleFetchProfile = async () => {
    setLoading(true)
    const { data, error } = await fetchProfile(token, userId)
    console.log(data)
    if (data) {
      setUser(data)
    }
    if (error) setError(error)
    setLoading(false)
  }

  useEffect(() => {
    handleFetchProfile()
  }, [])

  if (error) {
    return <div>{error}</div>
  }

  if (loading) {
    return <div>Cargando perfil...</div>
  }

  return (
    <div style={{ padding: "20px", textAlign: "center", marginTop: "60px" }}>
      <img src={randomBanners()} className="banner" />
      <h1>Perfil </h1>
      <h2>
        Bienvenido {user.firstname} {user.lastname}
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
        <ModalProfile
          handleSubmitModal={handleSubmitModal}
          handleChange={handleChange}
          user={user}
          setShowModal={setShowModal}
          showModal={showModal}
          setPassword={setPassword}
        />
      )}
    </div>
  )
}

export default Profile
