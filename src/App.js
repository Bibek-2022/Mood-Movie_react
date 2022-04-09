import "./App.css";
import { Container } from "react-bootstrap";
import { Title } from "./components/Title";
import { SearchForm } from "./components/search-form/SearchForm";
import { CustomeCard } from "./components/card/CustomeCard";
import { MovieList } from "./components/movie-list/MovieList";
import { fetchMovie } from "./helper/axiosHelper";

function App() {
  const getMovie = async (search) => {
    const { data } = await fetchMovie(search);
    console.log(data);
  };
  return (
    <div className="wrapper">
      <Container>
        <Title />
        <SearchForm getMovie={getMovie} />
        <CustomeCard />
        <hr />
        <MovieList />
      </Container>
    </div>
  );
}

export default App;
