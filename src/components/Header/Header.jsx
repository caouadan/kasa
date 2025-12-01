import { Link } from "react-router-dom";
import Logo from '../../assets/logo.svg';
import './Header.scss';

function Header() {
  return (
    <header>
        <img src={Logo} alt="Logo Kasa" />
    <nav>
      <Link to="/">Accueil</Link>
      <Link to="/about">A propos</Link>
    </nav>
    </header>
  );
}

export default Header;