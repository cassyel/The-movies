/* eslint-disable react/jsx-no-constructed-context-values */
import axios from "axios";
import { createContext, ReactNode, useEffect, useState } from "react";

type MovieContextProps = {
  children: ReactNode;
};

const initialValue = { movies: [] };
const MovieContext = createContext(initialValue);

export function MovieContextProvider({ children }: MovieContextProps) {
  const [movies, setMovies] = useState(initialValue.movies);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=8819300d8e1ecd149b33a568d20a2ae2&language=en-US&page=1"
      )
      .then((response) => {
        return setMovies(response.data.results);
      });
  }, []);

  return (
    <MovieContext.Provider value={{ movies }}>{children}</MovieContext.Provider>
  );
}
