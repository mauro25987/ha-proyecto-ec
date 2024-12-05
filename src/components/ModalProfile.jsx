import { useState } from "react"

const ModalProfile = ({
  handleEditUser,
  handleDelUser,
  handleChange,
  user,
  setShowModal,
  showModal,
}) => {
  const [passwordIsChecked, setPasswordIsChecked] = useState(false)
  const { firstname, lastname, password, phone, email, address } = user

  const handlePasswordIsChecked = () => {
    setPasswordIsChecked(!passwordIsChecked)
  }

  return (
    <form>
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
              value={firstname}
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
              value={lastname}
              onChange={handleChange}
              placeholder="Apellido"
            />
          </div>
          <div className="form-group">
            <div>
              <label htmlFor="checkbox">Cambiar Clave:</label>
              <input
                type="checkbox"
                id="checkbox"
                name="checkbox"
                checked={passwordIsChecked}
                onChange={handlePasswordIsChecked}
              />
            </div>
            <label htmlFor="password"> Clave:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={handleChange}
              placeholder="Ingrese un nuevo password si desea"
              autoComplete="on"
              disabled={!passwordIsChecked}
              hidden={!passwordIsChecked}
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone"> Teléfono:</label>
            <input
              type="number"
              id="phone"
              name="phone"
              value={phone}
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
              value={email}
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
              value={address}
              onChange={handleChange}
              placeholder="Dirección"
            />
          </div>
          <div className="modal-actions">
            <button type="button" className="save-button" onClick={handleDelUser}>
              Borrar Usuario
            </button>
          </div>
          <div className="modal-actions">
            <button type="button" className="save-button" onClick={handleEditUser}>
              Guardar
            </button>
          </div>
        </div>
      </div>
    </form>
  )
}

export default ModalProfile
