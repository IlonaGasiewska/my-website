import './Footer.css';
import SocialMedia from '../SocialMedia/SocialMedia';
import NavbarList from '../NavbarList/NavbarList';

function Footer() {
  return (
    <footer className="footer" id="footer">
      <h3>
        Ilona Gasiewska <span className="javascript-element">JavaScript</span>{' '}
        Developer
      </h3>
      <NavbarList />
      <div>
        <SocialMedia />
        <p className='email'>i.gasiewska.ilona@gmail.com</p>
      </div>
      <p className="copyrights">
        2024 <a href="/">&copy; Ilona Gasiewska</a>
      </p>
    </footer>
  );
}

export default Footer;
