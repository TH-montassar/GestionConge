import { useEffect } from "react";
import "./App.css";
import Routers from "./Routers/Routers";
import { setAuthToken } from "./utils/setAuthToken";
import { store } from "./Redux/store";
import { authCheck } from "./Redux/action/auth.action";

function App() {
  useEffect(() => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    store.dispatch(authCheck());
    /* window.addEventListener("storage", () => {
      if (!localStorage.token) store.dispatch(logout());
    }); */
  }, []);

  return (
    <>
      <Routers />
    </>
  );
}

export default App;
