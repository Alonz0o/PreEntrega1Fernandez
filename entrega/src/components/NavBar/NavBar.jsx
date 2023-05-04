import React from 'react'
import CardWidget from '../CardWidget/CardWidget'
import './NavBar.css'

const NavBar = () => {
    return(
        <header>
<nav className="navbar navbar-expand-lg bg-body-tertiary">
<div className="container-fluid">
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse">
    <p className="navbar-brand" >RachaiAPP</p>
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
        <p className="nav-link active" aria-current="page">Polenta</p>
      </li>
      <li className="nav-item">
        <p className="nav-link">Lomito</p>
      </li>
      <li className="nav-item">
        <p className="nav-link">Media Rez</p>
      </li>
    </ul>

    <CardWidget/>
  </div>
</div>
</nav>

</header>
    )
    }
export default NavBar