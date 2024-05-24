import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { useAppSelector } from "../../../hooks/useAppSelector";
import { UserSelectors } from "../../../store/selectors/selectors";
import { NavLink, useNavigate } from "react-router-dom";
import { RoutesName } from "../../../utils/enums";
import { useActions } from "../../../hooks/useActions";
import BasketIcon from "../../../assets/BasketIcon";
import ProfileIcon from "../../../assets/ProfileIcon";

const NavBar = () => {
  const { isAuth } = useAppSelector(UserSelectors);

  const { setIsAuth, setUser } = useActions();

  const navigate = useNavigate();

  const toggleIsAuth = () => {
    navigate(RoutesName.LOGIN);
  };

  const handleNavigationToAdmin = () => {
    navigate(RoutesName.ADMIN);
  };

  const handleNavigationToLogin = () => {
    setUser({});
    setIsAuth(false);
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
              <div className=" d-flex gap-4">
                <div>
                  <NavLink to={RoutesName.PROFILE}>
                    <ProfileIcon height={30} width={25} bg="#fff" />
                  </NavLink>
                </div>
                <div>
                  <NavLink to={RoutesName.BASKET}>
                    <BasketIcon height={30} width={22} bg="#fff" />
                  </NavLink>
                </div>
              </div>

              <Button
                size="sm"
                variant="outline-light"
                onClick={handleNavigationToAdmin}
              >
                Admin Panel
              </Button>
              <Button
                size="sm"
                variant="outline-light"
                onClick={handleNavigationToLogin}
              >
                Log out
              </Button>
            </div>
          </Nav>
        ) : (
          <Nav className="ml-auto">
            <div>
              <Button size="sm" variant="outline-light" onClick={toggleIsAuth}>
                Authorization
              </Button>
            </div>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
};

export default NavBar;
