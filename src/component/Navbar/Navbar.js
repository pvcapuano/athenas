import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavbarApp() {
  return (
    <>
      <Navbar bg="primary" variant="dark" className="fs-3">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="#home" className="text-white ">
              Athenas Crud
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarApp;
