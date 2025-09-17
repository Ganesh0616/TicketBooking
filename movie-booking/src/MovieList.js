import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Row, Col, Button } from "antd";
import { useNavigate } from "react-router-dom";
import "./MovieList.css"; // ✅ import the CSS file

const { Meta } = Card;

function MovieList() {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://backend-crud-one.vercel.app/product")
      .then((response) => setMovies(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleBookNow = (_id) => {
    navigate(`/movie/${_id}`);
  };

  return (
    <div className="movie-list-container">
      <Row gutter={[16, 16]} justify="center">
        {movies.map((movie) => (
          <Col xs={24} sm={12} md={8} lg={6} key={movie._id}>
            <Card
              hoverable
              className="movie-card"
              cover={
                <div className="movie-card-image-wrapper">
                  <img
                    alt={movie.name}
                    src={movie.image}
                    className="movie-card-image"
                  />
                </div>
              }
            >
              <Meta
                title={<span className="movie-card-title">{movie.name}</span>}
                description={
                  <span className="movie-card-price">
                    Price: ₹{movie.ticketprice ?? "N/A"}
                  </span>
                }
              />
              <Button
                type="primary"
                className="book-now-button"
                onClick={() => handleBookNow(movie._id)}
              >
                Book Now
              </Button>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default MovieList;
