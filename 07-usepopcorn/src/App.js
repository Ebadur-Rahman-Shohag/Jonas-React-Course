import { useState, useEffect } from "react";
import NavBar from "./Header/NavBar";
import Main from "./Body/Main";
import Logo from "./Header/Logo";
import Search from "./Header/Search";
import NumResults from "./Header/NumResults";
import ListBox from "./Body/ListBox";
import WatchedBox from "./Body/WatchedBox";
const tempMovieData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
  },
  {
    imdbID: "tt0133093",
    Title: "The Matrix",
    Year: "1999",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
  },
  {
    imdbID: "tt6751668",
    Title: "Parasite",
    Year: "2019",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
  },
];

const KEY = "6817df2b";

export default function App() {
  const [movies, setMovies] = useState(tempMovieData);

  useEffect(function () {
    fetch(`http://www.omdbapi.com/?apikey=${KEY}&s=batman`)
      .then((res) => res.json())
      .then((data) => console.log(data.Search));
  }, []);

  //This method caused side effect
  // fetch(`http://www.omdbapi.com/?apikey=${KEY}&s=batman`)
  //   .then((res) => res.json())
  //   .then((data) => console.log(data.Search));

  return (
    <>
      <NavBar>
        <Logo />
        <Search />
        <NumResults movies={movies} />
      </NavBar>
      <Main>
        <ListBox movies={movies} />
        <WatchedBox />
      </Main>
    </>
  );
}
