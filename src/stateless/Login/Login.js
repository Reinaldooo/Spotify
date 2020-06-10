import React from 'react';
//
import './Login.scss';
import { endpoints } from '../../services/api';
import { Logo } from '../../stateless';

export default function Login() {
  return (
    <main
      className="login"
      data-testid="login"
    >
      <div className="container">
        <Logo />

        <h2 className="login__microcopy">
          Música para todos.
        </h2>

        <a href={endpoints.getAuthorization().url} className="login__auth-button">
          Entrar
        </a>
      </div>
    </main>
  )
}
