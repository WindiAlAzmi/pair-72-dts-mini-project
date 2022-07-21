import React, { useState, useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import { useParams } from "react-router-dom";
import tmdb from '../apis/tmdb';
import Home from "./Home";
import MovieList from "./MovieList";
import Navbar from "./Navbar";

const DetailFilm = () => {
  const { id } = useParams();
  const [film, setFilm] = useState([]);

   const BASE_IMAGE_URL = "http://image.tmdb.org/t/p/original";

  useEffect(() => {
    const getFilm = async () => {
      try {
        const getDetailFilm = await tmdb.get(`/movie/${id}`);
        setFilm(getDetailFilm.data);
      } catch (error) {
        console.log(error);
      }
    };

    getFilm();
  }, [id]);
  return (
    <> 
    <Navbar />
    <Card sx={{ display: "flex", marginTop: 10}}>
      <CardMedia
        component="img"
        sx={{ width: 800 }}
        image={`${BASE_IMAGE_URL}${film.backdrop_path ? film.backdrop_path : film.poster_path}`}
        alt="Live from space album cover"
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto", marginTop: 8}}>
          <Typography component="div" variant="h2">
           {film.original_title}
          </Typography>
          <Typography
            variant="h5"
            color="text.secondary"
            component="div"
            sx={{ marginTop: 5 }}
          >
             {film.overview}
          </Typography>
        </CardContent>
      </Box>
      
    </Card>

    <MovieList />
    </>
  );
};

export default DetailFilm;
