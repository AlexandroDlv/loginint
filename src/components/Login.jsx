import React from 'react';
import LoginForm from './LoginForm';
import Sidebar from './Sidebar';
import '../styles/StyleIndex.css';

const Login = () => {
  return (
    <div className="container">
      <div className="login-left">
        <LoginForm />
      </div>
      <div className="login-right">
        <Sidebar />
      </div>
    </div>
  );
};

export default Login;