import "./navbar.css"
import { useEffect, useState } from 'react';
// import SearchIcon from '@mui/icons-material/Search';



import Avatar from "../../assets/Images/avatar.png"
import ReelPath from "../../assets/Images/ReelPath.png"
import { FaGear } from "react-icons/fa6";

// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
import { Navbar, Nav, Container, Offcanvas } from 'react-bootstrap';

import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";

const NavbarMenu = () => {


  const [showOffcanvas, setShowOffcanvas] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setShowOffcanvas(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  return (
    <>

      <Navbar expand="md" className="navbar text-white bg-black sticky-top py-2 px-4">
        <Container fluid >
          <Navbar.Brand href="#">
            <img src={ReelPath} alt="" className="logo" />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="offcanvasNavbar" onClick={() => setShowOffcanvas(true)} />
          <Navbar.Offcanvas
            show={showOffcanvas}
            onHide={() => setShowOffcanvas(false)}
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
            className="bg-black text-white"
          >
            <Offcanvas.Header closeButton closeVariant="white">
              <Offcanvas.Title id="offcanvasNavbarLabel">
                <img src={ReelPath} alt="" className="logo  w-50" />
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="links mt-1 me-md-auto d-flex align-md-items-center gap-md-5  gap-4 px-md-2">
                <Link to="/" className="link">Home</Link>
                <Link to="/" className="link">Movies</Link>
                <Link to="/" className="link">Watch List</Link>
                <Link to="/" className="link">New</Link>
              </Nav>
              <Nav className="mt-4 mt-md-0">
                <div className="right d-flex flex-md-row flex-column align-items-md-center align-items-start gap-4">
                  {/* <SearchIcon className="icon" /> */}
                  <div className="profile">
                    <img src={Avatar} alt="" className="avatar" />
                    <div className="options">
                      <span>Profile</span>
                      <span>Setting</span>
                      <span>Logout</span>
                    </div>
                  </div>
                </div>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>

      {/* <Navbar collapseOnSelect expand="md" className="navbar text-white bg-black sticky-top py-2">
        <Container>
          <Navbar.Brand href="#"><img src={ReelPath} alt="" className="logo mb-1" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" >
            <Nav className="links mt-md-0 mt-3 me-md-auto d-flex align-md-items-center gap-md-5  gap-4 px-md-2">
              <Link to="/" className=" link">Home</Link>
              <Link to="/" className=" link">Movies</Link>
              <Link to="/" className=" link">Watch List</Link>
              <Link to="/" className=" link">New</Link>
            </Nav>
            <Nav className="mt-md-0 mt-4 ">
              <div className="right d-flex flex-md-row flex-column align-items-md-center align-items-start">
                <SearchIcon className="icon " />

                <div className="profile">
                  <img src={Avatar} alt="" className="avatar" />
                  <div className="options">
                    <span>Profile</span>
                    <span>Setting</span>
                    <span>Logout</span>
                  </div>
                </div>

              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar> */}
    </>
  );
}

export default NavbarMenu;