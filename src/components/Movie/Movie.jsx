import { useEffect, useState } from "react";
import "./movie.css";
import { Link } from "react-router-dom";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { addToFavorites, removeFromFavorites } from "../../store/cartAction";


function Movie({ movie }) {
  const [movieList, setMovieList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const dispatch = useDispatch();
  const handleClick = (e, movie) => {
    console.log(movieList.some((item) => item.id === movie.id));
    if (e.target.classList.contains("fa-regular")) {
      dispatch(addToFavorites(movie));
      e.target.classList.remove("fa-regular");
      e.target.classList.add("fas");
    } else if (e.target.classList.contains("fas")) {
      dispatch(removeFromFavorites(movie));
      e.target.classList.remove("fas");
      e.target.classList.add("fa-regular");
    }
  };

  const getMovie = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=323e3fe5a8237f5319c4b400fb4bd2d9&page=${currentPage}`
    )
      .then((res) => res.json())
      .then((json) => setMovieList(json.results));
  };

  useEffect(() => {
    getMovie();
  }, [currentPage]);

  const getnext = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const getPrev = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  console.log(movieList);
  return (
    <Container>
      <Row>
        {movieList.map((movie) => (
          <Col sm={6} md={4} lg={3} key={movie.id}>
            <div className=" movie mt-5">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                className="poster"
                alt={movie.title}
              />
              <div className="movie-details">
              <h4 className="title card-title text-truncate">{movie.title}</h4>
                <div className="box">
                  <Link to={`/details/${movie.id}`} className="btn btn-success details">Details</Link>
                  {/* <p className="rating">{movie.vote_average}</p> */}
                  <i
                    className="fa-regular fa-star rating"
                    style={{ fontSize: "25px", color:"#FF9800" }}
                    onClick={(e) => {
                      handleClick(e, movie);
                    }}
                  ></i>
                </div>
              </div>
            </div>
          </Col>
        ))}
      </Row>

      <div className="my-5 d-flex justify-content-center">
        <Button className="btn1 mx-3 btn-success" onClick={getPrev}>
          Previous
        </Button>
        <Button className="btn2 btn-success" onClick={getnext}>
          Next
        </Button>
      </div>
    </Container>
    
  );
 
}

export default Movie;

