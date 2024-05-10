import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { useAppSelector } from "../../../hooks/useAppSelector";
import { UserSelectors } from "../../../store/selectors/selectors";
import { NavLink } from "react-router-dom";
import { RoutesName } from "../../../utils/enums";
import { useActions } from "../../../hooks/useActions";

const NavBar = () => {
  const { isAuth } = useAppSelector(UserSelectors);

  const { setIsAuth } = useActions();

  const toggleIsAuth = () => {
    setIsAuth(true);
  };

  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <NavLink to={RoutesName.SHOP}>
          <h3>TechLink</h3>
        </NavLink>
        {isAuth ? (
          <Nav className="ml-auto">
            <div className="d-flex gap-3">
              <Button size="sm" variant="outline-light">
                Admin Panel
              </Button>
              <Button size="sm" variant="outline-light">
                Log out
              </Button>
            </div>
          </Nav>
        ) : (
          <Nav className="ml-auto">
            <div>
              <Button onClick={toggleIsAuth} size="sm" variant="outline-light">
                Log in
              </Button>
            </div>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
};

export default NavBar;
