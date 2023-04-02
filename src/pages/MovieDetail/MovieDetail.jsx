import React, { useEffect, useState } from "react";
import "./MovieDetail.css";
import { useParams } from "react-router-dom";
import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";
import { yellow } from "@mui/material/colors";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import sorry from "../../media/sorry.jpg";
import sorry2 from "../../media/sorry2.jpg";
import cinema from "../../media/cinema.jpg";

const MovieDetail = () => {
  const [detail, setDetail] = useState([]);
  const [review, setReview] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getData();
    getReviews();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const getReviews = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=f96b20d81006ea5ddd8f1aaf0adbc828&language=en-US&page=1`
    );
    const reviews = await res.json();
    console.log("REVIEWS", reviews.results);
    setReview(reviews.results);
  };

  const getData = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=f96b20d81006ea5ddd8f1aaf0adbc828&language=en-US&page=1`
    );
    const data = await res.json();
    console.log(data);
    setDetail(data);
  };

  return (
    <>
      <div className="movie__container">
        <div className="movie__top">
          <div className="movie__banner__container">
            <img
              className="movie__banner"
              src={`https://image.tmdb.org/t/p/original${detail.backdrop_path}`}
              alt="banner"
            />
          </div>
          <div className="movie__details__">
            <div className="movie__detail">
              <div>
                <h1 className="movie__name">{detail.original_title}</h1>
              </div>
              <div className="movie__rating">
                <p>
                  ⭐ {detail.vote_average} | ( {detail.vote_count} )
                </p>
              </div>
            </div>
            <div className="movie__overview">{detail.overview}</div>
            <div className="movie__runtime">
              Runtime : {detail.runtime} Mins
            </div>
            <div className="movie__production">
              {detail && detail.production_companies ? (
                <span className="production__company">
                  Production House : {detail.production_companies[0].name}
                </span>
              ) : (
                ""
              )}
            </div>
            <div className="movie__genres">
              {detail && detail.genres
                ? detail.genres.map((genre) => (
                    <>
                      <span id={genre.id} className="movie__genre">
                        {genre.name}
                      </span>
                    </>
                  ))
                : ""}
            </div>
            <div className="movie__links">
              <div className="movie__link">
                <a
                  href={`https://www.imdb.com/title/${detail.imdb_id}`}
                  target="_blank"
                >
                  {" "}
                  IMDB
                  <OpenInNewRoundedIcon style={{ color: "#fdc501" }} />
                </a>
              </div>
              <div className="movie__link">
                <a href={detail.homepage} target="_blank">
                  {" "}
                  HOME
                  <OpenInNewRoundedIcon style={{ color: "#fdc501" }} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="movie__poster">
          <img
            src={`https://image.tmdb.org/t/p/original${detail.poster_path}`}
            alt=""
          />
        </div>
      </div>
      <div className="movie__reviews">
        {review.length > 0 ? (
          <div className="no__reviews">
            <img className="review__img" src={cinema} alt="" />
            <h1 className="review__head">Why Watch this? Honest Reviews - </h1>
          </div>
        ) : (
          <div className="no__reviews">
            <img src={sorry2} alt="" />
            <h1 className="review__head">
              <span> すみません </span>, No Reviews for this Movie{" "}
            </h1>
          </div>
        )}
        {review.map((review) => (
          <div className="review">
            <div className="review__top">
              <div>
                {review.author_details.avatar_path ? (
                  <div>
                    {console.log(review.author_details.avatar_path.slice(1))}
                    {review.author_details.avatar_path.startsWith("/https:") ? (
                      <img
                        className="review__author__img"
                        src={review.author_details.avatar_path.slice(1)}
                        alt=""
                      />
                    ) : (
                      <img
                        className="review__author__img"
                        src={`https://image.tmdb.org/t/p/original${review.author_details.avatar_path}`}
                        alt=""
                      />
                    )}
                  </div>
                ) : (
                  <AccountCircleIcon sx={{ fontSize: 48, color: "#c9c9c9" }} />
                )}
              </div>
              <h1 className="review__author">{review.author}</h1>
            </div>
            {review.content.length > 500 ? (
              <p className="review__content">
                {review.content.slice(0, 500)}...
                <a className="review__url" href={review.url}>
                  {" "}
                  Read More 👉
                </a>
              </p>
            ) : (
              <p className="review__content">{review.content}</p>
            )}
            <hr />
          </div>
        ))}
      </div>
    </>
  );
};

export default MovieDetail;
