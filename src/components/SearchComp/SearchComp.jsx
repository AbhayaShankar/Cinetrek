import React, { useState, useEffect } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Card from "../card/Card";
import "../movieList/MovieList.css";
import Error from "../Error/Error";

function SearchComp({ searchMovie, search, setSearch }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4500);
  }, []);

  return (
    <div className="search__container">
      {searchMovie.length !== 0 ? (
        <div>
          {isLoading ? (
            <div className="cards">
              <SkeletonTheme color="#202020" highlightColor="#444">
                <Skeleton height={300} duration={2} />
              </SkeletonTheme>
            </div>
          ) : (
            <div className="movie__list">
              <h2 className="movieList__title">
                {"Relevant Searched Movies . . .".toUpperCase()}
              </h2>
              <div className="list__cards">
                {searchMovie.map((movie) => (
                  <Card movie={movie} />
                ))}
              </div>
            </div>
          )}
        </div>
      ) : (
        <Error search={search} setSearch={setSearch} />
      )}
    </div>
  );
}

export default SearchComp;
