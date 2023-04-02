import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/Home/Home";
import MovieList from "./components/movieList/MovieList";
import MovieDetail from "./pages/MovieDetail/MovieDetail";
import About from "./components/AboutAuthor/About";
import Footer from "./components/Footer/Footer";
import Error from "./components/Error/Error";

function App() {
  const [search, setSearch] = useState("");
  const [searchDisable, setSearchDisable] = useState(true);
  const [dispSearch, setDispSearch] = useState(false);
  const [isHome, setIsHome] = useState(true);

  const handleChange = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value);
  };

  const handleSearch = (evt) => {
    console.log(evt.target.value);
  };

  return (
    <div className="app">
      <Router>
        <Header
          searchDisable={searchDisable}
          search={search}
          setSearchDisable={setSearchDisable}
          handleChange={handleChange}
          handleSearch={handleSearch}
          setSearch={setSearch}
        />
        <Routes>
          <Route
            index
            path="/"
            element={
              <Home
                setSearchDisable={setSearchDisable}
                setSearch={setSearch}
                search={search}
                dispSearch={dispSearch}
                setDispSearch={setDispSearch}
              />
            }
          ></Route>
          <Route
            path="/about"
            element={<About setSearchDisable={setSearchDisable} />}
          ></Route>
          <Route path="/movie/:id" element={<MovieDetail />}></Route>
          <Route
            path="/movies/:type"
            element={<MovieList setSearchDisable={setSearchDisable} />}
          ></Route>
          <Route
            path="/*"
            element={<Error setSearchDisable={setSearchDisable} />}
          ></Route>
        </Routes>
      </Router>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
