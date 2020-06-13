// This is not a container, it's just here to pass on codenation tests since they setup the tests this way.

import React from 'react';
//
import './Login.scss';
import { getAuthorization } from '../../services/api';
import { Logo } from '../../components';

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

        <a href={getAuthorization()} className="login__auth-button">
          Entrar
        </a>
      </div>
    </main>
  )
}
