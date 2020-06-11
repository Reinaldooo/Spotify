import React from 'react';
//
import './Dashboard.scss';

export default function Dashboard({ children }) {
  return (
    <div
      className="dashboard"
      data-testid="dashboard"
    >
      {children}
    </div>
  );
};

