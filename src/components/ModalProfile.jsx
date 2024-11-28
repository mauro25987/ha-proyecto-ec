const ModalProfile = ({
  handleSubmitModal,
  handleChange,
  user,
  setShowModal,
  showModal,
  setPassword,
}) => {
  const { firstname, lastname, password, phone, email, address } = user
  return (
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
            <button className="save-button">Guardar</button>
          </div>
        </div>
      </div>
    </form>
  )
}

export default ModalProfile
