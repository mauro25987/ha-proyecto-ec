import { FaLinkedin } from "react-icons/fa"
import "../components/Layout.css"

const About = () => {
  return (
    <div>
      <div className="main-contain">
        <div className="row row-cols-2">
          <div className="col-3">
            <h5 className="collaborator-name">Mauro Gonzalez</h5>

            <div className="card-body">
              <div className="collaborator-card">
                <img
                  src="https://i.pinimg.com/originals/01/7e/6f/017e6f2d0c32627056d26a7e77c75753.png"
                  className="collaborator-image"
                  alt="Mauro Gonzalez"
                />
                <h5>Colaborador destacado</h5>
                <FaLinkedin />
              </div>
            </div>
          </div>
          <div className="col-3">
            <h5 className="collaborator-name">Ignacio Armendariz</h5>

            <div className="card-body">
              <div className="collaborator-card">
                <img
                  src="https://i.pinimg.com/originals/01/7e/6f/017e6f2d0c32627056d26a7e77c75753.png"
                  className="collaborator-image"
                  alt="Mauro Gonzalez"
                />{" "}
                <h5>Colaborador destacado</h5>
                <FaLinkedin />
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className="row row-cols-2">
          <div className="col-3">
            <h5 className="collaborator-name">Santiago Buchhammer</h5>

            <div className="card-body">
              <div className="collaborator-card">
                <img
                  src="https://i.pinimg.com/originals/01/7e/6f/017e6f2d0c32627056d26a7e77c75753.png"
                  className="collaborator-image"
                  alt="Mauro Gonzalez"
                />
                <h5>Colaborador destacado</h5>
                <FaLinkedin />
              </div>
            </div>
          </div>
          <div className="col-3">
            <h5 className="collaborator-name">Mateo Barreiro</h5>

            <div className="card-body">
              <div className="collaborator-card">
                <img
                  src="https://i.pinimg.com/originals/01/7e/6f/017e6f2d0c32627056d26a7e77c75753.png"
                  className="collaborator-image"
                  alt="Mauro Gonzalez"
                />
                <h5>Colaborador destacado</h5>
                <FaLinkedin />
              </div>
            </div>
          </div>

          <div className="about">
            <h2>Sobre este proyecto</h2>
            <strong>
              Creamos un video club como proyecto final del curso avanzado de FrontEnd de Hack
              Academy. Las Tecnologías utilizas fueron; React, Redux y Bootstrap.
            </strong>
          </div>
        </div>
      </div>
      {/* <div className="card-container">
        <div className="card">
          
          <h2>Colaborador destacado</h2>
          <div className="collaborator-card">
            <img
              src="https://i.pinimg.com/originals/01/7e/6f/017e6f2d0c32627056d26a7e77c75753.png"
              className="collaborator-image"
              alt="Mauro Gonzalez"
            />
            <h5 className="collaborator-name">Mauro Gonzalez</h5>
            <FaLinkedin />
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

            <FaLinkedin />
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
            <FaLinkedin />
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
            <FaLinkedin />
          </div>
        </div>
      </div> */}
    </div>
  )
}

export default About
