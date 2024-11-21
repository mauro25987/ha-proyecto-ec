import "../components/Layout.css"

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
    </div>
  )
}

export default Login
