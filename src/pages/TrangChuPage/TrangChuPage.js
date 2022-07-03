import React, { useEffect } from "react";
import { useState } from "react";

import { movieService } from "../../service/movieService";
import MovieList from "./MovieList/MovieList";
import { MovieTab } from "./MovieTab/MovieTab";

export default function TrangChuPage() {
  let [movieList, setMovieList] = useState([]);
  useEffect(() => {
    movieService
      .getMovieList()
      .then((res) => {
        setMovieList(res.data.content);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <div className="container mx-auto py-20">
        <MovieList movieList={movieList} />
        <div className="container mt-20">
          <MovieTab />
        </div>
      </div>
    </div>
  );
}
