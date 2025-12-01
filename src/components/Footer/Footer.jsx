import LogoFooter from '../../assets/logo-footer.svg';
import './Footer.scss';

function Footer() {
  return (
    <footer>
        <img src={LogoFooter} alt="Logo Kasa Footer" />
        <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;