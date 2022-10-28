import "./NavBar.css";
import logo from './assets/logo-gg.png';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="nav-container">
        <div className="nav-menu">
            <Link className="btnNav" to={'/category/aros'}>Aros</Link>
            <Link className="btnNav" to={'/category/collares'}>Collares</Link>
            <Link className="btnNav" to={'/category/pulseras'}>Pulseras</Link>
        </div>
            <label className="logo">
            <Link to='/'>
                <img src={logo} alt="Logo GalleryGang"/>
            </Link>
            </label>
        <CartWidget />
    </nav>
    );
};

export default NavBar;