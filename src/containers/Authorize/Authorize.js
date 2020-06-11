// This is not a container, it's just here to pass on codenation tests since they setup the tests this way.

import React from 'react';
//
import './Authorize.scss';
import { Loading } from '../../components';


const Authorize = () => {
  return (
    <div
      className="callback"
      data-testid="callback"
    >
      <div className="container">
        <Loading text="Autenticando..." />
      </div>
    </div>
  );
}

export default Authorize;

