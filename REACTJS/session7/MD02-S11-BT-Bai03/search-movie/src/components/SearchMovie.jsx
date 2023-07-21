import React, { useEffect, useState } from "react";
import "./SearchMovie.css";
import Card from "react-bootstrap/Card";

import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

export default function SearchMovie() {
  const [data, setData] = useState([]);
  const [searchWord, setSearchWord] = useState("");
  const [foundMovie, setFoundMovie] = useState([]);

  const loadData = () => {
    axios
      .get("http://localhost:8000/results")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    loadData();
  }, []);
  console.log(data);

  const handleChange = (e) => {
    setSearchWord(e.target.value);
  };
  console.log(searchWord);

  const handleClick = () => {
    const filterMovies = data.filter((e) =>
      e.original_title.toLowerCase().includes(searchWord.toLowerCase())
    );
    setFoundMovie(filterMovies);
  };
  console.log(foundMovie);
  return (
    <>
      <div className="products">
        <div className="section-title">
          <h2>search for movie</h2>
          <input
            type="input"
            id="myinput"
            placeholder="search for movie"
            value={searchWord}
            onChange={handleChange}
          />
          <button id="mybtn" onClick={handleClick}>
            search
          </button>
        </div>
        <div className="products-center" />
      </div>
      <Container>
        <Row xs={1} sm={2} md={4} className="g-4">
          {foundMovie.map((movie, index) => (
            <Col key={index}>
              <Card className="h-100">
                <Card.Img
                  variant="top"
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                />
                <Card.Body>
                  <Card.Title className="text-center">
                    {movie.original_title}
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}
