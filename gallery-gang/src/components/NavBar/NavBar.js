import "./NavBar.css";
import logo from './assets/logo-gg.png';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="nav-container">
        <div className="nav-menu">
            <button className="btnNav">Inicio</button>
            <button className="btnNav">Productos</button>
            <button className="btnNav">Contactos</button>
        </div>
            <label className="logo">
                <a href="../index.html">
                    <Link to='/'>
                    <img src={logo} alt="Logo GalleryGang"/>
                    </Link>
                </a>
            </label>
        <CartWidget />
    </nav>
    );
};

export default NavBar;