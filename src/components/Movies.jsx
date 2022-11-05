import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import { Grid } from "@mui/material";

export default function Movies({ movies }) {
  return (
    <Grid container spacing={1}>
      <ImageList
      // display="flex"
      // direction="column"
      // alignItems="center"
      // justifyContent="center"
      // style={{ minHeight: "100vh" }}
      >
        <ImageListItem key="Subheader" cols={2}>
          <ListSubheader component="div">December</ListSubheader>
        </ImageListItem>
        {movies.map((movie) => {
          const { poster_path, id, title } = movie;
          return (
            <Grid xs={3}>
              <ImageListItem key={id}>
                <img
                  src={`https://image.tmdb.org/t/p/w1280${poster_path}?w=248&fit=crop&auto=format`}
                  srcSet={`https://image.tmdb.org/t/p/w1280${poster_path}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  alt={movie.title}
                  loading="lazy"
                />
                <ImageListItemBar
                  title={title}
                  subtitle={title}
                  actionIcon={
                    <IconButton
                      sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                      aria-label={`info about ${title}`}
                    >
                      <InfoIcon />
                    </IconButton>
                  }
                />
              </ImageListItem>
            </Grid>
          );
        })}
      </ImageList>
    </Grid>
  );
}
