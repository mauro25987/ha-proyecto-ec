import React from "react"
import "../components/Layout.css"

const About = () => {
  return (
    <div>
      <div className="card-container">
        <div className="card">
          <h2>Colaborador destacado</h2>
          <div className="collaborator-card">
            <img
              src="https://i.pinimg.com/originals/01/7e/6f/017e6f2d0c32627056d26a7e77c75753.png"
              className="collaborator-image"
              alt="Mauro Gonzalez"
            />
            <h5 className="collaborator-name">Mauro Gonzalez</h5>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6sfpJV5Seq8DQuL8VXYbcf-8FjMJuX_ntnMw42fVBBlOMUItAb8Ll3EY7rF1-txwqFf4&usqp=CAU"
              className="link-logo"
            />
          </div>
        </div>
        <div className="card">
          <h2>Colaborador destacado</h2>
          <div className="collaborator-card">
            <img
              src="https://i.pinimg.com/originals/01/7e/6f/017e6f2d0c32627056d26a7e77c75753.png"
              className="collaborator-image"
              alt="Ignacio Armendariz"
            />
            <h5 className="collaborator-name">Ignacio Armendariz</h5>

            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6sfpJV5Seq8DQuL8VXYbcf-8FjMJuX_ntnMw42fVBBlOMUItAb8Ll3EY7rF1-txwqFf4&usqp=CAU"
              className="link-logo"
            />
          </div>
        </div>
        <div className="card">
          <h2>Colaborador destacado</h2>
          <div className="collaborator-card">
            <img
              src="https://i.pinimg.com/originals/01/7e/6f/017e6f2d0c32627056d26a7e77c75753.png"
              className="collaborator-image"
              alt="Santiago Buchhammer"
            />
            <h5 className="collaborator-name">Santiago Buchhammer</h5>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6sfpJV5Seq8DQuL8VXYbcf-8FjMJuX_ntnMw42fVBBlOMUItAb8Ll3EY7rF1-txwqFf4&usqp=CAU"
              className="link-logo"
            />
          </div>
        </div>
        <div className="card">
          <h2>Colaborador destacado</h2>
          <div className="collaborator-card">
            <img
              src="https://i.pinimg.com/originals/01/7e/6f/017e6f2d0c32627056d26a7e77c75753.png"
              className="collaborator-image"
              alt="Mateo Barreiro"
            />
            <h5 className="collaborator-name">Mateo Barreiro</h5>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6sfpJV5Seq8DQuL8VXYbcf-8FjMJuX_ntnMw42fVBBlOMUItAb8Ll3EY7rF1-txwqFf4&usqp=CAU"
              className="link-logo"
            />
          </div>
        </div>
      </div>
      <div className="about">
        <h2>Sobre este proyecto</h2>
        <strong>
          Creamos un video club como proyecto final del curso avanzado de FrontEnd de Hack Academy.
          Las Tecnologías utilizas fueron; React, Redux y Bootstrap.
        </strong>
      </div>
    </div>
  )
}

export default About
