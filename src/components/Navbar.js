// src/components/Navbar.js
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success sticky-top">
      <div className="container">
        <Link className="navbar-brand" to="/">e-DRIVING</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown">
                Profile
              </a>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/sejarah">Sejarah</Link></li>
                <li><Link className="dropdown-item" to="/testimoni">Testimoni</Link></li>
              </ul>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/hubungi">Hubungi Kami</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/gallery">Gallery</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/data-siswa">Siswa</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
