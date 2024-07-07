import './NavbarList.css';

function NavbarList() {
  return (
    <ul className="navbar-list">
      <li className="navbar-list-item">
        <a className="navbar-list-link" href="#about-me">
          ABOUT ME
        </a>
      </li>
      <li className="navbar-list-item">
        <a className="navbar-list-link" href="#projects">
          PROJECTS
        </a>
      </li>
      <li className="navbar-list-item">
        <a className="navbar-list-link" href="#contact">
          CONTACT
        </a>
      </li>
    </ul>
  );
}

export default NavbarList;
