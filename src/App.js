import { useEffect, useMemo, useState } from "react";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import ResumePage from "./pages/ResumePage";
import NotFoundPage from "./pages/NotFoundPage";
import { NavigationContext } from "./navigation";
import "./App.css";

function currentPath() {
  return window.location.pathname.replace(/\/+$/, "") || "/";
}

function App() {
  const [path, setPath] = useState(currentPath);

  useEffect(() => {
    const onPop = () => setPath(currentPath());
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  useEffect(() => {
    if (path === "/ip-reservation" || path === "/ip-reservations") {
      window.history.replaceState({}, "", "/");
      setPath("/");
    }
  }, [path]);

  const navigate = useMemo(
    () => (to, { replace = false } = {}) => {
      if (replace) {
        window.history.replaceState({}, "", to);
      } else {
        window.history.pushState({}, "", to);
      }
      setPath(currentPath());
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    },
    []
  );

  const page =
    path === "/" || path === "/ip-reservation" || path === "/ip-reservations" ? (
      <HomePage />
    ) : path === "/resume" ? (
      <ResumePage />
    ) : (
      <NotFoundPage />
    );

  return (
    <NavigationContext.Provider value={{ path, navigate }}>
      <Layout>{page}</Layout>
    </NavigationContext.Provider>
  );
}

export default App;
