import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
//
import './Topbar.scss';
import { Logo } from '../../components';
import { logout } from '../../actions';


export default function Topbar() {
  const { name, thumb } = useSelector(state => state.auth);
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(logout())
  }

  return (
    <header className="topbar" data-testid="topbar">
      <div className="container">
        <Link to="/dashboard">
          <Logo />
        </Link>

        <div className="user">
          <button className="user__logout" onClick={handleLogout}>Logout</button>

          <figure className="user__thumb">
            <img src={thumb} alt={`foto de perfil de ${name}`} />
          </figure>
        </div>
      </div>
    </header>
  )
}
