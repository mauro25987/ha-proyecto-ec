const Home = () => {
  const fetchMovies = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc`,
        options
      );
      const newMovies = response.data.results;
      if (newMovies.length === 0) {
        setHasMore(false);
      } else {
        setMovies((prevMovies) => {
          const uniqueMovies = newMovies.filter(
            (newMovie) => !prevMovies.some((movie) => movie.id === newMovie.id)
          );
          return [...prevMovies, ...uniqueMovies];
        });

        setPage((prevPage) => prevPage + 1);
      }
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  return (
    <div>
      <nav></nav>
      <section>
        <h1>pasdlkasdkl</h1>
      </section>
    </div>
  );
};

export default Home;
