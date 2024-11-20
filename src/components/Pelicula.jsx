const Pelicula = () => {
  return (
    <div style={{ 
      backgroundImage: "pelicula.img"
    }}>
      <h1>Titulo: {"pelicula.title"}</h1>
      <p>
        Duracion: {"pelicula.duration"} Año: {"pelicula.year"} Rating: {"pelicula.rate"} "logo de imdb"
      </p>
      <h2>Generos:{"pelicula.genres"}</h2>
      <h2>Reparto:{"pelicula.cast"}</h2>
      <h2>Directores:{"pelicula.directors"}</h2>
      <h2>Descripcion:</h2>
      <p> {"pelicula.description"} </p>
      <div>
        <button>Añadir al carrito</button>
        <button>Trailer</button>
        <button>Logo de compartir</button>
      </div>
    </div>
  );
};

export default Pelicula;
