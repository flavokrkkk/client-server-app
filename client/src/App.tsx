import { useEffect, useState } from "react";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/UI/NavBar/NavBar";
import { useActions } from "./hooks/useActions";
import { check } from "./http/userApi";
import { Spinner } from "react-bootstrap";

function App() {
  const { setIsAuth, setUser } = useActions();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    check()
      .then((data) => {
        setUser(data);
        setIsAuth(true);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
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
