import { useEffect } from "react";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/UI/NavBar/NavBar";
import { useActions } from "./hooks/useActions";
import { check } from "./http/userApi";
import { Spinner } from "react-bootstrap";
import { useAppSelector } from "./hooks/useAppSelector";
import { UserSelectors } from "./store/selectors/selectors";

function App() {
  const { setIsAuth, setUser, setIsLoading } = useActions();

  const { isLoading } = useAppSelector(UserSelectors);

  useEffect(() => {
    check()
      .then((data) => {
        setUser(data);
        setIsAuth(true);
      })
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return <Spinner animation={"grow"} />;
  }

  return (
    <>
      <NavBar />
      <AppRouter />
    </>
  );
}

export default App;
