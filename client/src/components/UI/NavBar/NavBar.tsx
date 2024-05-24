import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { useAppSelector } from "../../../hooks/useAppSelector";
import { UserSelectors } from "../../../store/selectors/selectors";
import { NavLink, useNavigate } from "react-router-dom";
import { RoutesName } from "../../../utils/enums";
import { useActions } from "../../../hooks/useActions";
import basketSwg from "../../../static/icons8-корзина-50.png";
import userProfile from "../../../static/profile_jwr3y85tihsn.svg";

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
              <div>
                <NavLink to={RoutesName.PROFILE}>
                  <img src={userProfile} height={30} />
                </NavLink>
              </div>
              <div>
                <NavLink to={RoutesName.BASKET}>
                  <img src={basketSwg} height={20} />
                </NavLink>
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
              <Button onClick={toggleIsAuth} size="sm" variant="outline-light">
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
