import { Route, Routes, useLocation } from "react-router-dom";
import { UserAuth } from "./context/AuthContext";
import Home from "./pages/Home";
import Header from "./components/Header";
import Login from "./pages/Login";

const App = () => {
  const { currentUser } = UserAuth();
  const location = useLocation();
  console.log(currentUser);
  return (
    <>
      {location.pathname == "/login" ? (
        <> </>
      ) : (
        <>
          {" "}
          <Header />
        </>
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default App;
