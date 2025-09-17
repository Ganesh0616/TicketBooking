import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Card, Button } from 'antd';
import './MovieDetails.css';

const { Meta } = Card;

function MovieDetails({ cart, setCart }) {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    axios.get(`https://backend-crud-one.vercel.app/product/${id}`)
      .then(res => setMovie(res.data))
      .catch(err => console.error('Error fetching details:', err));
  }, [id]);

  if (!movie) return <div className="movie-details-container">Loading...</div>;

  const handleAddToCart = () => {
    const existingItem = cart.find(item => item.id === movie.id);
    if (existingItem) {
      alert('This movie is already in your cart!');
    } else {
      setCart([...cart, { ...movie, quantity: 1 }]);
      alert('Movie added to cart!');
       // redirect to cart page
    }
  };

  return (
    <div className="movie-details-container">
      <Card
        hoverable
        className="movie-details-card"
        cover={
          <img
            alt={movie.name}
            src={movie.image}
            className="movie-details-image"
          />
        }
      >
        <Meta
          title={<span className="movie-details-title">{movie.name}</span>}
          description={<span className="movie-details-price">₹{movie.ticketprice}</span>}
        />
        <p className="movie-details-description">{movie.description}</p>
        <Button
          type="primary"
          style={{
            marginTop: '10px',
            backgroundColor: '#e50914',
            borderColor: '#e50914',
            width: '100%'
          }}
          onClick={handleAddToCart}
        >
          Add to Cart
        </Button>
      </Card>
    </div>
  );
}

export default MovieDetails;
