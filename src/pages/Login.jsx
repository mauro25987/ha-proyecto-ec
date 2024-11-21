import "../components/Layout.css";

function Login() {
  return (
    <div className="main-contain">
      <div className="login-body">
        <form className="login-form">
          <h1>Freedom to Stream</h1>
          <p>All the video content you enjoy in one place</p>
          <input type="email" placeholder="Email" required />
        </form>
        <br />
        <form className="login-form">
          <input type="email" placeholder="Password" required />
        </form>
        <br />
        <form className="login-form">
          <input type="email" placeholder="Confirm Password" required />
        </form>
        <br />
        <button style={{ paddin: "5px", margin: "5px" }}>Sign up</button>
      </div>
<<<<<<< HEAD
=======
      <form className="login-form">
        <input type="email" placeholder="Email" required />
        <input type="contraseña" placeholder="Contraseña" required/>
        <input type="contraseña" placeholder="Confirmar Contraseña" required/>
        <div className="login-checkbox"></div>
        
      </form>
>>>>>>> bf8df2d60d5c65e65cd3181162df0adba4abfe56
    </div>
  );
}

export default Login;
