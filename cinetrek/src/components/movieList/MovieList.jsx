import React, { useState, useEffect } from "react";
import Card from "../card/Card";
import { useParams } from "react-router-dom";
import "./MovieList.css";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function MovieList({ setSearchDisable }) {
  const [movieList, setMovieList] = useState([]);
  const { type } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  const disableSearch = () => {
    setSearchDisable(false);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4500);
  }, []);

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    getData();
    // setTimeout(() => {
    //   setIsLoading(false);
    // }, 2000);
  }, [type]);

  const getData = async () => {
    setIsLoading(true);
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${
        type ? type : "upcoming"
      }?api_key=f96b20d81006ea5ddd8f1aaf0adbc828&language=en-US&page=1`
    );
    const data = await res.json();
    const result = data.results;
    console.log(result);
    setMovieList(result);
    setIsLoading(false);
    disableSearch();
  };

  return (
    <div className="movie__list__container">
      {isLoading ? (
        <div className="cards">
          <SkeletonTheme color="#202020" highlightColor="#444">
            <Skeleton height={300} duration={2} />
          </SkeletonTheme>
        </div>
      ) : (
        <div className="movie__list">
          <h2 className="movieList__title">
            {((type ? type : "Upcoming") + " Movies . . .").toUpperCase()}
          </h2>
          <div className="list__cards">
            {movieList.map((movie) => (
              <Card movie={movie} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default MovieList;
