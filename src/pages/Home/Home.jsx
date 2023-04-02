import React, { useEffect, useState } from "react";
import "./Home.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import { Icon } from "@mui/material";
import MovieList from "../../components/movieList/MovieList";
import SearchComp from "../../components/SearchComp/SearchComp";

function Home({
  search,
  dispSearch,
  setDispSearch,
  setSearch,
  setSearchDisable,
}) {
  const [popularMovies, setPopularMovies] = useState([]);

  const [searchMovie, setSearchMovie] = useState(search);
  console.log("SEARCH MOVIE", searchMovie);
  console.log("SEARCH DATA", search);

  useEffect(() => {
    const getMovies = async () => {
      const res = await fetch(
        "https://api.themoviedb.org/3/movie/popular?api_key=f96b20d81006ea5ddd8f1aaf0adbc828&language=en-US&page=1"
      );
      const data = await res.json();
      const result = data.results;
      console.log(result);
      setPopularMovies(result);
    };

    getMovies();
  }, []);

  useEffect(() => {
    const getSearchMovie = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=f96b20d81006ea5ddd8f1aaf0adbc828&language=en-US&query=${search}&page=1&include_adult=false`
      );
      const data = await res.json();
      if (search !== "") {
        setDispSearch(true);
      } else {
        setDispSearch(false);
      }
      setSearchMovie(data.results);
      console.log("search data", data);
    };
    setSearchDisable(true);
    getSearchMovie();
  }, [search]);

  return (
    <div className="hero__container">
      {dispSearch ? (
        <SearchComp
          searchMovie={searchMovie}
          search={search}
          setSearch={setSearch}
        />
      ) : (
        <div className="carousel-slider">
          <Carousel
            showThumbs={false}
            autoPlay={true}
            showArrows={true}
            infiniteLoop={true}
            transitionTime={3}
            showStatus={false}
            stopOnHover={true}
            carouselStartIndex={0}
          >
            {popularMovies.map((movie) => {
              return (
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  to={`/movie/${movie.id}`}
                >
                  <div key={movie.id} className="posterImage">
                    <img
                      src={`https://image.tmdb.org/t/p/original${
                        movie && movie.backdrop_path
                      }`}
                      alt="movie-poster"
                    />
                  </div>
                  <div className="poster__overlay">
                    <div className="poster__title">
                      {movie ? movie.original_title : ""}
                    </div>
                    <div className="poster__release">
                      {movie ? movie.release_date : ""}
                      <span className="poster__rating">
                        {" "}
                        {movie.vote_average}
                        <StarIcon
                          style={{}}
                          sx={{
                            color: "#ffc600",
                            fontSize: "32px",
                            paddingTop: "6px",
                            marginLeft: "6px",
                            ...`@media only screen and (max-width: 768px) {
                              font-size: 24px;
                            }`,
                          }}
                        />
                      </span>
                    </div>
                    <div className="poster__desc">
                      {movie ? movie.overview : ""}
                    </div>
                  </div>
                </Link>
              );
            })}
          </Carousel>
          <MovieList />
        </div>
      )}
    </div>
  );
}

export default Home;
