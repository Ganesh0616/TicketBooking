import React from 'react';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import './Header.css';

function Header({ cartCount }) {
  const navigate = useNavigate();

  return (
    <div className="header-container">
      <div className="header-logo" onClick={() => navigate('/')}>
        🎬 BookMyMovie
      </div>
      <Button
        type="primary"
        className="header-cart-button"
        onClick={() => navigate('/cart' )}
      >
        Go to Cart ({cartCount})
      </Button>
    </div>
  );
}

export default Header;
