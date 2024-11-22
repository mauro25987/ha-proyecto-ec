function Error() {
  return (
    <div style={{textAlign: "center", marginTop: "50px"}}>
      <h1 style={{color: "", fontSize: ""}}>404</h1>
      <p style={{fontSize: "20px"}}>La página que buscas no existe.</p>
      <a href="/"
      style={{display: "inline-block", 
       padding: "10px 20px",
       backgroundColor: "#007bff",
       marginTop: "20px",  
       color: "white",  
       borderRadius:""}}
      >
        Volver al inicio
      </a>
    </div>
  )
}

export default Error
