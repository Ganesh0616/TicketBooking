// src/components/Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Input, Button } from 'antd';

const Login = () => {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username.trim()) {
      localStorage.setItem('auth', 'true'); // simulate login
      navigate('/cart');
    } else {
      alert('Username required');
    }
  };

  return (
    <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#121212' }}>
      <Card style={{ width: 300 }}>
        <h2 style={{ textAlign: 'center' }}>Login</h2>
        <Input
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ marginBottom: 16 }}
        />
        <Button type="primary" block onClick={handleLogin}>Login</Button>
      </Card>
    </div>
  );
};

export default Login;
