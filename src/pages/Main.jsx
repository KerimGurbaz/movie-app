import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState, useEffect, useContext } from "react";
import Movies from "../components/movies/Movies";
import { AuthContext } from "../context/AuthContext";

const Main = () => {
  // const API_KEY = "34f357d9a91c3d9ccaf3fa10d802bc19";
  const API_KEY = process.env.REACT_APP_TMDB_KEY;
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;

  const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;
  const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const { currentUser } = useContext(AuthContext);

  const getData = async (API) => {
    const response = await fetch(API);
    const movies = await response.json();
    setMovies(movies.results);

    console.log(movies);
  };

  useEffect(() => {
    getData(FEATURED_API);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm && currentUser) {
      getData(SEARCH_API + searchTerm);
    } else if (!currentUser) {
      alert("Please login to search a movie");
    } else {
      alert("Please enter a text");
    }
  };

  return (
    <div>
      <Box
        onChange={(e) => setSearchTerm(e.target.value)}
        onSubmit={handleSubmit}
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      </Box>
      <Movies movies={movies} />
    </div>
  );
};

export default Main;
