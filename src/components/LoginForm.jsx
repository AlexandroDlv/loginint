import React, { useState } from 'react';
import '../styles/StyleIndex.css';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <form className="forma" onSubmit={handleSubmit}>
      <div className="header-container">
        <h1>Iniciar sesión</h1>
        <div className="Regresar">
          <a href="../index.html" className="regresar-text">
            <img src="/Iconos-Imagenes/flecha-correcta.png" alt="Regresar" className="regresar-icon" /> Regresar
          </a>
        </div>
      </div>
      <div className="FormIzquierdoIniciarSesion">
        <div>
          <label>Correo Electrónico</label>
          <div className="regist">
            <input
              type="email"
              placeholder="Email"
              style={{ textAlign: 'center' }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <label>Contraseña</label>
          <div className="regist">
            <input
              type="password"
              placeholder="Ingresa tu contraseña"
              style={{ textAlign: 'center' }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="margenesiniciarsesion">
            <button type="submit">Iniciar sesión</button>
          </div>
          <a href="registro.html" className="regist2">¿No tienes una cuenta? Regístrate ahora.</a>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;