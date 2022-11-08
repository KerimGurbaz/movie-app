import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState, useEffect } from "react";
import Movies from "../components/movies/Movies";

const Main = () => {
  // const API_KEY = "34f357d9a91c3d9ccaf3fa10d802bc19";
  const API_KEY = process.env.REACT_APP_TMDB_KEY;
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;

  const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;
  const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;

  const [movies, setMovies] = useState([]);

  const getData = async () => {
    const response = await fetch(url);
    const movies = await response.json();
    setMovies(movies.results);

    console.log(movies);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h2>Main</h2>
      <Box
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
