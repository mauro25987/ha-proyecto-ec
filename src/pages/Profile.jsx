import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { deleteUser, fetchProfile, updateProfile } from "../api/vercel"
import "../components/Layout.css"
import { ModalProfile } from "../components/index"
import { removeToken } from "../reducer/authSlice"
import randomBanners from "../utils/randomBanner"
import "./modal.css"

const Profile = () => {
  const { token, userId } = useSelector(state => state.auth)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [showModal, setShowModal] = useState(false)
  const [error, setError] = useState(null)
  const [user, setUser] = useState({})
  const [loading, setLoading] = useState(true)

  const handleChange = e => {
    const { name, value } = e.target
    setUser({ ...user, [name]: value })
  }

  const handleEditUser = () => {
    const { firstname, lastname, password, phone, email, address } = user
    if (password === "") {
      setUser({ firstname, lastname, phone, email, address })
      console.log(user)
    } else {
      setUser({ firstname, lastname, password, phone, email, address })
    }
    handleUpdateProfile()
    setShowModal(!showModal)
  }

  const handleDelUser = async () => {
    setLoading(true)
    const { data, error } = await deleteUser(token, userId)
    if (data) {
      console.log(data)
    }
    if (error) {
      setError(error)
    }
    setLoading(false)
    setShowModal(!showModal)
    dispatch(removeToken())
    navigate("/")
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
    if (data) {
      setUser(data)
    }
    if (error) setError(error)
    setLoading(false)
  }

  useEffect(() => {
    handleFetchProfile()
    /* 
      setTotalPrice((valorAnt) => valorAnt + movie.price)

    */
  }, [])

  if (loading) {
    return <div>Cargando perfil...</div>
  }

  return (
    <div style={{ padding: "20px", textAlign: "center", marginTop: "60px" }}>
      <img src={randomBanners()} className="banner" />{" "}
      <h2>
        Bienvenido {user.firstname} {user.lastname}
      </h2>
      <p>Email: {user.email}</p>
      <p>Telefono: {user.phone}</p>
      <p>Direccion: {user.address}</p>
      <button className="button" onClick={() => setShowModal(!showModal)}>
        Editar Perfil
      </button>
      <hr />
      <h3>Compras realizadas</h3>
      {user.orders.map(order => {
        const totalPrice = order.movies.reduce((acc, movie) => acc + parseInt(movie.price), 0)
        return (
          <div key={order.id}>
            <h1>Numero de Orden: {order.id}</h1>
            <p>
              Peliculas compradas:
              {order.movies.map(movie => (
                <div key={movie.id}>
                  <span>
                    Titulo: {movie.title} - Precio: $ {movie.price}
                  </span>
                </div>
              ))}
            </p>
            <p>Precio Total: $ {totalPrice}</p>
            <hr />
          </div>
        )
      })}
      {showModal && (
        <ModalProfile
          handleEditUser={handleEditUser}
          handleDelUser={handleDelUser}
          handleChange={handleChange}
          user={user}
          setShowModal={setShowModal}
          showModal={showModal}
        />
      )}
      {error && <div>{error}</div>}
    </div>
  )
}

export default Profile
