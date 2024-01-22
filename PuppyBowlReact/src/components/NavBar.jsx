import "bootstrap/dist/css/bootstrap.css";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [isNavbarOpen, setNavbarOpen] = useState(false);

  const handleNavbarToggle = () => {
    setNavbarOpen(!isNavbarOpen);
  };

  const handleNavbarClose = () => {
    setNavbarOpen(false);
  };

  return (
    <Navbar className="navbar" bg="light" sticky="top" expand="lg">
      <Navbar.Brand className="text-center text-success fs-2 my-3">
        PuppyBowl
      </Navbar.Brand>
      <Navbar.Toggle onClick={handleNavbarToggle} />
      <Navbar.Collapse in={isNavbarOpen} onExited={handleNavbarClose}>
        <Nav className=" nav-bar ml-auto gap-3">
          <Nav.Link as={Link} to="/players">
            Players
          </Nav.Link>
          <Nav.Link as={Link} to="/add-players">
            Add Players
          </Nav.Link>

          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
