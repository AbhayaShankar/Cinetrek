import React from "react";
// import { Link } from "react-router-dom";
import "./About.css";
import profiledp from "../../media/Abhaya.PNG";
import { Link } from "react-router-dom";

function About({ setSearchDisable }) {
  setSearchDisable(false);

  return (
    <div className="about__me">
      <div className="profile">
        <img className="profile__dp" src={profiledp} alt="" />
      </div>
      <div className="profile__text">
        <h1 className="profile__about">
          Hi... I am <span> Abhaya Shankar</span> , Creator of this app. I am
          India based Web Developer with over 6 months of development and still
          counting...
          <br /> <br />
          <div className="logo">
            <span className="logo__name">CINETREK</span>
            <span className="tagline">
              Discover, Explore and Enjoy Movies with Cinetrek
            </span>
          </div>
          <br /> <br />
          Welcome to my{" "}
          <span>
            <Link to={"/"}>Cinetrek App</Link>
          </span>{" "}
          , built with
          <span> ReactJS</span> and
          <span> MaterialUI</span> With this app, you can easily search for
          movies, filter them by Popularity , Upcoming release dates, and Top
          Rated , and view reviews from other users.
          <br /> <br />
          To power this app, I've used the <span> TMDb</span> (The Movie
          Database) API, which provides a wealth of information about movies,
          including their titles, descriptions, ratings, release dates, and
          reviews. By tapping into this powerful resource, my app is able to
          provide you with up-to-date information about your favorite movies, as
          well as new releases that you might be interested in.
          <br /> <br />
          One of the key features of my app is the ability to filter movies
          based on their popularity, release date, and rating. This makes it
          easy to find the movies that are most relevant to you, whether you're
          looking for the latest blockbuster or an obscure indie film.
          <br /> <br />
          In addition to searching and filtering movies, my app also includes a{" "}
          <span>Reviews</span> section where you can read what other users have
          to say about the movies you're interested in. This can help you make
          more informed decisions about what to watch, and it can also provide a
          platform for you to share your own thoughts and opinions about the
          movies you love.
          <br /> <br />
          Overall, I've designed this app to be a comprehensive tool for movie
          lovers, providing easy access to information about movies, as well as
          a community where users can share their passion for cinema. So whether
          you're a casual moviegoer or a hardcore film buff, I hope you'll find
          this app to be a valuable resource for exploring the world of movies!
          <br /> <br />
          <br /> <br />
        </h1>
      </div>
    </div>
  );
}

export default About;
